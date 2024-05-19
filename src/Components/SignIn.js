
import React from 'react'
import Signupteam from './Template'

export default function Enter() {
 
  const signingfun=()=>{
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
        alert('Wrong Username or Password')
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
      // alert(error)
      console.error('Error:', error);
    });
  }
  const signingfunteam=()=>{
    let x = document.getElementById("teamUsername");
    let y =document.getElementById("teamPassword");
    let z= document.getElementById("teamMemberName");
    const obj={
      tusername:y.value,
      tpassword:x.value,
      name:z.value
    } 
    fetch('http://localhost:5173/signin',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj), 
    }).then(response => {
      if (!response.ok) {
        alert('Wrong Username or Password')
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('POST request successful:', data);
      alert('signin successful');
      localStorage.setItem('token',data['token']);
      console.log(window);
      window.location.href = './formteam';
    })
    .catch(error => {
      // alert(error)
      console.error('Error:', error);
    });
  }
  return (
    <>
    <Signupteam signing={signingfun} name="Sign In" signing2={signingfunteam}/>
    </>
  )
}
 