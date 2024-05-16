import './App.css';
import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn';
import Enter from './Components/Enter';
import Carousel from './Components/Carousel';
import Form from './Components/Form';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
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
      <Navbar name1="SignUp" name2="SignIn"></Navbar>
      <Routes>
        <Route exact path='/' element={<Carousel/>}/>
        <Route exact path='/signup' element={<Enter/>}/>
        <Route exact path='/signin' element={<SignIn/>}/>
        
      <Route exact path='/form' element={<Form/>}/>
      </Routes>
    </Router>
    
     
    </>
  );
}

export default App;
