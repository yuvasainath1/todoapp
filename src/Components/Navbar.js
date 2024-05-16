import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <>
        <nav className="navbar navbar-expand-lg  bg-dark" style={{padding:'1%'}}>
        <div className="container-fluid">
            <Link className="navbar-brand text-light" to="/"><small>TODO</small></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link text-light" to="/signup">{props.name1}</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" aria-current="page" to="/signin">{props.name2}</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" aria-current="page" to="/signout">{props.name3}</Link>
                </li>
                
            </ul>
            </div>
        </div>
        
        </nav>
    </>
  )
}
