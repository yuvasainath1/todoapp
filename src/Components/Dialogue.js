import React,{useState} from "react";
import Form from './Form'
function Dialog({ isOpen, onClose }) {
    const[title,settitle]=useState('')
    const[description,setdescription]=useState('')
    const changingtitle=(e)=>{
        settitle(e.target.value);
    }
    const changingdescription=(e)=>{
        setdescription(e.target.value);
    }
    const temp=()=>{
        console.log( document.getElementById("updatedtitle").value);
        console.log( document.getElementById("updateddescription").value)
        console.log(localStorage.getItem('reqid'));
    }
    if (!isOpen) return null;
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
          // console.log(data);
          localStorage.setItem('todos',JSON.stringify(data));
          
        })
        .catch(error => {
          console.log("error");
        });
      }
    const updating=()=>{
        let id=localStorage.getItem('reqid');
        const obj={
          'title': document.getElementById("updatedtitle").value,
          'description': document.getElementById("updateddescription").value
        }
        fetch('http://localhost:3000/todos/'+id, {
          method: 'PUT', 
          headers: {
           'Content-Type': 'application/json', 
            'authorization': localStorage.getItem('token')
          },
          body: JSON.stringify(obj),
          }).then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Update request successful:', data);
        //   alert('Updated todolist');
             getTodos();
           window.location.href='http://localhost:3001/form'
        })
        .catch(error => {
          alert(error);
          console.error('Error:', error);
        });
    
      }
  return (
    <div
      className="modal-dialog modal-dialog-centered modal"
      style={{ display: "block",}}
    >
      <div className="modal-dialog">
        <div className="modal-content" style={{'position':"fixed", width:'65%', zIndex:1050,'marign':'0 auto' , right: '17%', }}>
          <div className="modal-header">
            <h5 className="modal-title">Updating the todo</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="container" style={{ marginBottom: "2%" }}>
              <div className="mb-3 my-4">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Title to be Updated
                </label>
                <input
                  type="email"
                  id="updatedtitle"
                  className="form-control"
                  placeholder="Name of Work"
                  value={title}
                  onChange={changingtitle}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Description to be Updated
                </label>
                <textarea
                  className="form-control"
                  id="updateddescription"
                  rows="2"
                  value={description}
                  onChange={changingdescription}
                ></textarea>
              </div>
              
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={updating} >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
