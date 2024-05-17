import './App.css';
import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn';
import Enter from './Components/Enter';
import Carousel from './Components/Carousel';
import Form from './Components/Form';
import Logout from './Components/Logout';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Newform from './Components/Dialogue';
function App() {
  return (
    <>
    {/* <NoteState> */}
     {/* <Navbar/>
     <Carousel/> */}
    {/* <Form/>  */}
    {/* </NoteState> */}
    {/* <Signin></Signin> */}
    <Router>

      
      <Routes>
        <Route exact path='/' element={<><Navbar name1="SignUp" name2="SignIn"></Navbar> <Carousel/></>}/>
        <Route exact path='/signup' element={<> <Navbar name1="SignUp" name2="SignIn"></Navbar><Enter/></>}/>
        <Route exact path='/signin' element={<><Navbar name1="SignUp" name2="SignIn"></Navbar><SignIn/></>}/>
        <Route exact path='/form' element={<><Navbar name3='Signout'></Navbar><Form/></>}/>
        <Route exact path='/signout' element={<><Navbar name1="SignUp" name2="SignIn"></Navbar><Logout/></>}/>
      </Routes>
    </Router>
    
     
    </>
  );
}

export default App;
