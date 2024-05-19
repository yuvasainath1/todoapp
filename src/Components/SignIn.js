
import React from 'react'
import Loginteam from './Loginteam'

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
    <Loginteam signing={signingfun}/>
    </>
  )
}
 