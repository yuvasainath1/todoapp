import './App.css';
import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn';
import Enter from './Components/Enter';
import Carousel from './Components/Carousel';
import Form from './Components/Form';
import Logout from './Components/Logout';
import Formteam from './Components/Formteam'

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<><Navbar name1="SignUp" name2="SignIn"></Navbar> <Carousel/></>}/>
        <Route exact path='/signup' element={<> <Navbar name1="SignUp" name2="SignIn"></Navbar><Enter/></>}/>
        <Route exact path='/signin' element={<><Navbar name1="SignUp" name2="SignIn"></Navbar><SignIn/> </>}/>
        {/*  <Route  exact path='/signin' element={<Temo/>}/> */}
        <Route exact path='/form' element={<><Navbar name3='Signout'></Navbar>{localStorage.getItem('token') ? <Form /> : <Logout />}</>}/>
        <Route exact path='/signout' element={<><Navbar name1="SignUp" name2="SignIn"></Navbar><Logout/></>}/>
        <Route exact path='/formteam' element={<><Navbar name3='Signout'></Navbar>{localStorage.getItem('token') ? <Formteam /> : <Logout />}</>}/>
      </Routes>
    </Router>     
    </>
  );
}

export default App;
