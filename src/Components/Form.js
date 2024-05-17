import React,{useContext, useEffect, useState} from 'react'
import Dialogue from './Dialogue'
import { useFetcher } from 'react-router-dom';

export default function Form() {
  const deleting=(id)=>{
    fetch('http://localhost:3000/todos/'+id, {
      method: 'DELETE', 
      headers: {
       'Content-Type': 'application/json', 
        'authorization': localStorage.getItem('token')
      },
      body: JSON.stringify(),
      }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('DELETE request successful:', data);
      alert('Deleted from todolist');
       getTodos();
       window.location.href='http://localhost:3001/form'
    })
    .catch(error => {
      alert(error);
      console.error('Error:', error);
    });
  }
  
  const addToList = () => {
    const obj={
      'title': document.getElementById("title").value,
      'description': document.getElementById("description").value
    }
    fetch('http://localhost:3000/todos', {
      method: 'POST', 
      headers: {
       'Content-Type': 'application/json', 
        'authorization': localStorage.getItem('token')
      },
      body: JSON.stringify(obj),
      }).then(response => {
      if (!response.ok) {
        alert('Network response was not ok');
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log('POST request successful:', data);
      alert('Added todo to the todolist');
        getTodos();
        window.location.href='http://localhost:3001/form';
       
    })
    .catch(error => {
      alert(error);
      console.error('Error:', error);
    });
  };
  const getTodos=()=>{
    fetch('http://localhost:3000/todos', {
      method: 'GET', 
      headers: {
       'Content-Type': 'application/json', 
        'authorization': localStorage.getItem('token')
      },
      body: JSON.stringify(),
      }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      localStorage.setItem('todos',JSON.stringify(data));
      
    })
    .catch(error => {
      console.log("error");
    });
  }
  getTodos(); 
  const [isDialogOpen, setIsDialogOpen] = useState(false);
    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };
  return (

    <>
    <Dialogue isOpen={isDialogOpen} onClose={closeDialog} />
    
    <div className="container" style={{'marginBottom':'2%',}}>
        <div className="mb-3 my-4">
        <label htmlFor="exampleFormControlInput1" className="form-label" >Title</label>
        <input type="email"  id="title" className="form-control"  placeholder="Name of Work"/>
        </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
        <textarea className="form-control" id="description" rows="2"></textarea>
        </div>
        <div>
        <button className="btn btn-outline-success btn-sm text-dark" type="submit" onClick={() => { addToList();}}>Add To List</button>
        </div>
    </div>
      <div className=" container row g-2 row row-cols-1 row-cols-md-3 g-2" style={{'display':'flex', 'margin':'0 auto'}}>
    {localStorage.getItem('todos') && JSON.parse(localStorage.getItem('todos')).map((element, index) => (
      <div className="col-sm-3" style={{'marginTop':'0.3%', 'marginBottom':'0.3%'}}  key={element.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{element.title}</h5>
            <p className="card-text">{element.description}</p>
            <a  className="btn btn-primary btn-sm"  style={{'margin':'0 5px'}} onClick={()=>{deleting(element.id)}} >Delete</a>
            <a
                id='update'
                className="btn btn-primary btn-sm"
                style={{ margin: '0 5px' }}
                onClick={()=>{openDialog(); localStorage.setItem('reqid',element.id)}}
            >
                Update
            </a>
          </div>
        </div>
      </div>
    ))}
    
    </div>
    
    </>
  )
}
