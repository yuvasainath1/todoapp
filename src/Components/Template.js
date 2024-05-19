import React from 'react'
import {useState} from 'react'
import Temo from './Loginwithgoogle'


export default function Loginteam(props) {
  const [teamPassword, setTeamPassword] = useState('');
  const [teamUsername, setTeamUsername] = useState('');
  const [teamMemberName, setTeamMemberName] = useState('');
  const [eyeIcon, setEyeIcon] = useState("fa-eye");
  const [containerClass, setContainerClass] = useState('d-md-none');
  const [usernameclass, setusernameClass] = useState('');

  const handleTeamUsernameChange = (e) => {
    setTeamUsername(e.target.value);
  };

  const handleTeamMemberNameChange = (e) => {
    setTeamMemberName(e.target.value);
  };

  const handleTeamPasswordChange = (e) => {
    setTeamPassword(e.target.value);
  };
  const[eyesymbol,seteyeSymbol]=useState("fa-eye")
  const[password,setpassword]=useState('')
  const[username,setusername]=useState('')
  
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
 
  function togglePasswordVisibility() {
    const passwordInput = document.getElementById("teamPassword");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      setEyeIcon("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      setEyeIcon("fa-eye");
    }
  }

  const handleIndividualClick = () => {
      setContainerClass('d-md-none');
      setusernameClass('');
    };
    // if(containerClass=='')
    // handleIndividualClick();
    const handleTeamClick = () => {
        setusernameClass('d-md-none');
        setContainerClass('');
  };

    return (
        <>
      <div className='container' style={{ padding: '2%', outline: "1px solid black", marginTop: '5%', width: '40%' }}>
        <center><h2>{props.name}</h2></center>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '4%' }}>
          <h6 className="mb-0 pb-3"><a role='button' onClick={handleIndividualClick}>For Individual</a></h6>
          <h6 className="mb-0 pb-3"><a role='button' onClick={handleTeamClick}>For Team/Family</a></h6>
        </div>
        <div className={containerClass}>
          <div>
            <label htmlFor="teamMemberName" className="form-label">Name of the Team Member</label>
          </div>
          <div>
            <input type="text" id="teamMemberName" className="form-control" value={teamMemberName} onChange={handleTeamMemberNameChange} />
          </div>
          <div>
            <label htmlFor="teamUsername" className="form-label">Username of the Team</label>
          </div>
          <div>
            <input type="text" id="teamUsername" className="form-control" value={teamUsername} onChange={handleTeamUsernameChange} />
          </div>
          <div>
            <label htmlFor="teamPassword" className="form-label">Password of the Team</label>
          </div>
          <div style={{ display: 'flex', position: 'relative' }}>
            <input type="password" id="teamPassword" className="form-control" value={teamPassword} onChange={handleTeamPasswordChange} />
            <i className={`far ${eyeIcon}`} id="togglePassword" style={{ marginLeft: '-30px', marginTop: '10px', cursor: 'pointer' }} onClick={togglePasswordVisibility}></i>
          </div>
          <div id="passwordHelpBlock" className="form-text">
            <div>
              <button type="submit" className="btn btn-dark mb-3 btn-sm" style={{ marginTop: '1%' }} onClick={props.signing2}>{props.name}</button>
            </div>
          </div>
        </div>
      
      <div className={usernameclass}> 
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
     <div>
    <button type="submit" className="btn btn-dark mb-3 btn-sm" style={{marginTop:'3%'}}  onClick={props.signing}>{props.name}</button>
    </div>
     </div>
     <div>
    <center> <p>OR</p></center>
        <center>
          <Temo/>
        </center>
      </div>
      </div>  
      </div>
    </>
      )
}
