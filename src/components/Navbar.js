import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import logo from '../images/logo.png'

const Navbar = (props) => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-col fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"><em><strong>NewsBytes</strong></em></Link>
            {/* <img src="../images/logo.png" alt="" /> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mt-auto ms-auto  mb-2 mb-lg-0 mx-3">
                <li className="nav-item">
                  <Link className="nav-link" to="/">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertaiment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Tecnology</Link>
                </li>
              </ul>
              {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}
            </div>
          </div>
        </nav>
      </div>
    )
  }

export default Navbar
