require('dotenv').config({ path: '.env.local' });

const fs=require("fs")
const express=require("express")
const bodyparser=require("body-parser")
const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const cors=require("cors");
const app=express()

app.use(express.json())
app.use(cors())
app.use(bodyparser.json())
const Secret="I will succeeD.Its just a matter of tIme"

const teamschema=new mongoose.Schema({
    tusername: String,
    tpassword:String,
    tUsers:[{
        name:String
    }],
    ttodoslist:[{
        title:String,
        description:String,
        id:Number,
        added_by:String
    }]
    
})
const Team=mongoose.model('Team',teamschema);

mongoose.connect(process.env.connect_to_mongodb);

const teamauthentication=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(authHeader){
        const token=authHeader;
        jwt.verify(token,Secret,(err,team)=>{
            if(err)res.status(403).send();
            else{
                // req.team=team;
                next();
            }
        })
    }else{
        res.sendStatus(401);
    }
}
function funcutil(req,res){
    let reqteam='';
    let tem=false;
    let reqname='';
        const authHeader=req.headers.authorization;
        if(authHeader){
            const token=authHeader;
            jwt.verify(token,Secret,(err,obj)=>{
                if(err)res.status(403).send();
                else{
                    let temp=obj.payld;
                    let tlength=temp.length;
                    for (let i = 0; i < tlength; i++) {
                        if (temp[i] === '!') {
                            tem = true;
                            continue;
                        }
                        if (tem === false) {
                            reqteam += temp[i];
                        } else {
                            reqname += temp[i];
                        }

                    }
                    // console.log(reqteam,reqname);
                }
            })
        }else{
            res.sendStatus(401);
        }
    return {'teamname':reqteam,
            'name':reqname};
}
app.post('/signup',async(req,res)=>{
    const {tusername, tpassword,name}=req.body;
    const team=await Team.findOne({tusername});
    if(team){
        let tem=false;
        for(let i of team.tUsers){
            if(i.name===name){
                tem=true;
                return res.status(403).send("User Already exists. You can sign in");
            }
        }
        if(tem===false){
        team.tUsers.push({name});
        team.save();
        let payld=tusername+'!'+name;
        const token = jwt.sign({ payld,role: 'team' }, Secret, { expiresIn: '1h' });
        return res.json({message:'User created in the Team',token});
        }
    }else{
        const obj = { tusername: tusername, tpassword: tpassword, name:name};
        const newteam=new Team(obj);
        newteam.tUsers.push({name});
        await newteam.save();       
        let payld=tusername+'!'+name;
        // console.log(payld);
        const token = jwt.sign({ payld, role: 'team' }, Secret, { expiresIn: '1h' });
        res.json({message:"Team with the User given is Created successfully",token});
    }
})
app.post('/signin', async(req,res)=>{
    const {tusername, tpassword,name}=req.body;
    const team=await Team.findOne({tusername,tpassword});
    if(team){
        let tem=false;
        for(let i of team.tUsers){
            if(i.name==req.body.name)  tem=true;
        }
        if(tem===false) return res.status(403).send("User doesnt exist in the team. Sign Up first");
        else{
            let payld=tusername+'!'+name;
            const token = jwt.sign({ payld, role: 'team' }, Secret, { expiresIn: '1h' });
            res.json({message:"Login Successful",token})
        }
    }else{
        res.status(403).json({ message: "Team Not found" });
    }
})
app.post('/todos',async(req,res)=>{
    let obj;
    obj=funcutil(req,res);
    // console.log(obj);
    const teamX=await Team.findOne({tusername:obj.teamname});
    // console.log(teamX);
    if(req.body.title===""){
        res.status(401).json({message:"Todo Cant be added without a title"})
    }else{
        const  newtodo={
            title:req.body.title,
            description:req.body.description,
            id:Math.floor(Math.random()*100000),
            added_by:obj.name
        }
        // console.log(newtodo);
        teamX.ttodoslist.push(newtodo);
        await teamX.save();
        res.json({message: "New Todo has been added"});
    }
})
app.get('/todos',teamauthentication,async(req,res)=>{
    let obj;
    obj=funcutil(req,res);
    const userpub=await Team.findOne({tusername:obj.teamname});
    res.json(userpub.ttodoslist);
})
app.delete('/todos/:id',teamauthentication,async(req,res)=>{
    let obj;
    obj=funcutil(req,res);
    const userpub=await Team.findOne({tusername:obj.teamname});
    let newlist=[];
    for(let i of userpub.ttodoslist){
        if(i.id!=req.params.id)newlist.push(i);
    }
    userpub.ttodoslist=newlist;
    await userpub.save();
    res.json({message:"todo with given id is deleted from the list"});
})
app.put('/todos/:id',teamauthentication,async(req,res)=>{
    let obj;
    obj=funcutil(req,res);
    const userpub=await Team.findOne({tusername:obj.teamname});
    for(let i of userpub.ttodoslist){
        if(i.id==req.params.id){
            i.title=req.body.title;
            i.description=req.body.description;
            i.added_by="updated by " + obj.name;
            break;
        }
    }
    await userpub.save();
    res.json({message:"todo with given id is updated in the list"});
})
app.listen(5173);