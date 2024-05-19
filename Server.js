
require('dotenv').config({ path: '.env.local' });

const fs=require("fs")
const express=require("express")
const bodyparser=require("body-parser")
const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const cors=require("cors")
const app=express()

app.use(express.json())
app.use(cors())
app.use(bodyparser.json())
const Secret="I will succeeD.Its just a matter of tIme"

const userschema=new mongoose.Schema({
    username:String,
    password: String,
    todoslist:[{   
            title:String,
            description:String,
            id:Number
        }],
})


const User = mongoose.model('User', userschema);
mongoose.connect(process.env.connect_to_mongodb);
const userauthentication=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(authHeader){
        const token=authHeader;
        jwt.verify(token,Secret,(err,user)=>{
            if(err)res.status(403).send();
            else{
                req.user = user;
                next();
            }
        })
    }else{
        res.sendStatus(401);
    }
}
function funcutil(req,res){
    let requsername;
        const authHeader=req.headers.authorization;
        if(authHeader){
            const token=authHeader;
            jwt.verify(token,Secret,(err,user)=>{
                if(err)res.status(403).send();
                else{
                    // console.log(user);
                    requsername= user.username;
                }
            })
        }else{
            res.sendStatus(401);
        }
    return requsername;
}
app.post('/signup',async(req,res)=>{
    const {username, password}=req.body;
    const user=await User.findOne({username});
    if(user){
        res.status(403).send("User Already exists");
    }else{
        const obj = { username: username, password: password };
        const newuser=new User(obj);
        newuser.save();
        const token = jwt.sign({ username, role: 'user' }, Secret, { expiresIn: '1h' });
        res.json({message:"User Created successfully",token});
    }
})
app.post('/signin', async(req,res)=>{
    
    const {username, password}=req.body;
    const user=await User.findOne({username,password});
    if(user){
        const token = jwt.sign({ username, role: 'user' }, Secret, { expiresIn: '1h' });
        res.json({message:"Login Successful",token})
    }else{
        res.status(403).json({ message: "User Not found" });
    }
})
    app.post('/todos',async(req,res)=>{
        let requsername;
        requsername=funcutil(req,res);
        const userpub=await User.findOne({username:requsername});
        // console.log(requsername);
        if(req.body.title===""){
            res.status(401).json({message:"Todo Cant be added without a title"})
        }else{
            const  newtodo={
                title:req.body.title,
                description:req.body.description,
                id:Math.floor(Math.random()*100000),
            }
            // console.log(newtodo);
            userpub.todoslist.push(newtodo);
            await userpub.save();
            res.json({message: "New Todo has been added"});
        }
    })
    app.get('/todos',userauthentication,async(req,res)=>{
        let requsername;
        requsername=funcutil(req,res);
        const userpub=await User.findOne({username:requsername});
        res.json(userpub.todoslist);
    })
    app.delete('/todos/:id',userauthentication,async(req,res)=>{
        let requsername;
        requsername=funcutil(req,res);
        const userpub=await User.findOne({username:requsername});
        let newlist=[];
        for(let i of userpub.todoslist){
            if(i.id!=req.params.id)newlist.push(i);
        }
        userpub.todoslist=newlist;
        await userpub.save();
        res.json({message:"todo with given id is deleted from the list"});
    })
    app.put('/todos/:id',userauthentication,async(req,res)=>{
        let requsername;
        requsername=funcutil(req,res);
        const userpub=await User.findOne({username:requsername});
        for(let i of userpub.todoslist){
            if(i.id==req.params.id){
                i.title=req.body.title;
                i.description=req.body.description;
                break;
            }
        }
        // console.log(userpub);
        // console.log(req.body.title);
        // console.log(req.body.description);
        await userpub.save();
        res.json({message:"todo with given id is updated in the list"});
    })
app.listen(3000);