import React,{useContext} from 'react'

export default function Form() {
    
  const addToList = () => {
    const obj={
      'title': document.getElementById("title").value,
      'description': document.getElementById("description").value
    }
    fetch('http://localhost:3000/todos', {
      method: 'POST', 
      headers: {
       ' Content-Type': 'application/json', 
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
    .then(data => {
      console.log('POST request successful:', data);
      alert('Added todo to the todolist');
    })
    .catch(error => {
      alert(error);
      console.error('Error:', error);
    });
  };
  
  return (
    <div className="container">
        <div className="mb-3 my-4">
        <label htmlFor="exampleFormControlInput1" className="form-label" >Title</label>
        <input type="email"  id="title" className="form-control"  placeholder="Name of Work"/>
        </div>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
        <textarea className="form-control" id="description" rows="2"></textarea>
        </div>
        <div>
        <button className="btn btn-outline-success btn-sm text-dark" type="submit" onClick={addToList}>Add To List</button>
        </div>
    </div>
  )
}
