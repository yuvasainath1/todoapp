
import React from 'react'
import {useState} from 'react'
import Navbar from './Navbar'
export default function Enter() {
  const[eyesymbol,seteyeSymbol]=useState("fa-eye")
  const[password,setpassword]=useState('')
  const[username,setusername]=useState('')
  // const[Navbar,setNavbar]=useState()
  function myFunction() {
    var x = document.getElementById("inputPassword5");
    if (x.type === "password") {
      x.type = "text";
      seteyeSymbol("fa-eye-slash")
    } else {
      x.type = "password";
      seteyeSymbol("fa-eye")
    }
  }
  const changefun1=(e)=>{
    setusername(e.target.value);
  }
  const changefun2=(e)=>{
    setpassword(e.target.value);
  }
 
  const signing=()=>{
    let x = document.getElementById("inputPassword5");
    let y =document.getElementById("username5");
    const obj={
      username:y.value,
      password:x.value
    } 
    fetch('http://localhost:3000/signin',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj), 
    }).then(response => {
      if (!response.ok) {
        alert('Network response was not ok')
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('POST request successful:', data);
      alert('signin successful');
      localStorage.setItem('token',data['token']);
      console.log(window);
      window.location.href = './form';
    })
    .catch(error => {
      alert(error)
      console.error('Error:', error);
    });
  }
  return (
    <>
    <div className='container' style={{padding:'2%', outline: "1px solid black",marginTop:'4%', width:'40%'}}>
    <center><h2>SignIn</h2></center>
    <div>
        <label htmlFor="inputPassword5" className="form-label">Username</label>
    </div>
    <div>
        <input type="username" id="username5" className="form-control" value={username} onChange={changefun1} />
        
    </div>
    <div>
        <label htmlFor="inputPassword" className="form-label">Password</label>
    </div>
    <div style={{"display":"flex", "position":'relative'}}>
        <input type="password" id="inputPassword5" className="form-control" value={password}  onChange={changefun2}/>
        <i className={`far ${eyesymbol}`} id="togglePassword"  style={{"marginLeft":"-30px", "marginTop":"10px" ,"cursor":"pointer"}} onClick={myFunction}></i>
    </div>
    <div id="passwordHelpBlock" className="form-text">
    <small>Your password must be 8-20 characters long, contain letters and
     numbers, and must not contain spaces, special characters, or emoji.</small>
     <div>
    <button type="submit" className="btn btn-dark mb-3 btn-sm" style={{marginTop:'3%'}} onClick={signing} >SignIn</button>
    </div>
     </div>
     <div>
    <center> <p>OR</p></center>
        <center>
          <a
            className="btn btn-dark btn-lg"
            href="/"
            role="button"
            style={{
              paddingLeft: "5%",
              paddingRight: "5%",
              borderRadius: "30px",
              marginBottom: "0%",
              marginTop: "2%",
            }}
          >
            <small>Continue with Google</small>
          </a>
        </center>
      </div>
    </div>
    
    </>
  )
}
 