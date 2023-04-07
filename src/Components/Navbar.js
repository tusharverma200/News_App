import React, { Component } from 'react'
 import {Link} from 'react-router-dom'
 import logo from './monkeyLogo.png'
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark sticky">
  <div className="container-fluid">
    {/* // <Link className="navbar-brand" to="#">Navbar</Link> */}
    <img src={logo} style={{height:'45px', width:'45px',borderRadius:'40px'}} alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2  mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link mx-2" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-2" aria-current="page" to="/Business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-2" aria-current="page" to="/Entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-2" aria-current="page" to="/Technology">Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-2" aria-current="page" to="/Health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-2" aria-current="page" to='/Science'>Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-2" aria-current="page" to='/Sports'>Sports</Link>
        </li>
      {/* sportstechnology */}
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar


// <form className="d-flex" role="search">
      //   <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      //   <button className="btn btn-outline-primary" type="submit">Search</button>
      // </form>