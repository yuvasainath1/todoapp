import React from 'react'
import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Temo from './Loginwithgoogle'
import Signupteam from './Signupteam'
export default function Enter() {
  const signingfun=()=>{
    let x = document.getElementById("inputPassword5");
    let y =document.getElementById("username5");
    const obj={
      username:y.value,
      password:x.value
    }
    fetch('http://localhost:3000/signup',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    }).then(response => {
      if (!response.ok) {
        // alert('Network response was not ok');
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('POST request successful:', data);
      alert("signup successful");
      localStorage.setItem('token', data['token']);
      window.location.href = './form';
    })
    .catch(error => {
      console.error('Error:', error);
      alert(`'Network response was not ok' or "User already exists"`);
    });
  }
  return (
    <>
    <Signupteam signing={signingfun}/>
    </>
  )
}
 