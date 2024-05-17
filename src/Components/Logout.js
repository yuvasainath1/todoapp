import React from 'react'

export default function Logout() {
  return (
    <div>
      <center>
        <div style={{'marginTop':'4%', 'marginBottom':'4%'}}><h1>Signed Out!!!!</h1></div>
      <div>
      <p>Click here to signin again &nbsp;&nbsp;&nbsp;
      <a href='/signin'>Signin</a> </p>
      </div>
      <div>
      <p>Go to home &nbsp;&nbsp;&nbsp;  
      <a href='/'>home</a> </p>
      </div>
      </center>
    </div>
  )
}
