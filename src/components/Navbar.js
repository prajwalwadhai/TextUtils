// rfc : is the shortcut htmlFor below React Fuction based Component
// impt : import PropTypes form 'prop-typs'

// import {Link} from 'react-router-dom'  // Hamne Link import kiya kiv ki ye react router ka part hai ab jaha jaha <a><a/> ka tag hai vaha a=Link and href=to se replace karna hai taki us page par ham ja sake
import PropTypes from 'prop-types'

import React from 'react'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid ">
          {/* <Link className="navbar-brand" to= "/">
            {props.title}
          </Link> */}
          <a className="navbar-brand" href= "#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to= "/">
                  Home
                </Link> */}
                <a className="nav-link active" aria-current="page" href= "#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to= "/about">
                  {props.aboutText}
                </Link> */}
                {/* <a className="nav-link" href= "/about">
                  {props.aboutText}
                </a> */}
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href= "/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item " href= "/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href= "/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href= "/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
          <div className={`form-check form-switch mx-1 text-${props.mode ==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick= {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable {props.mode==='light'?'dark':'light'} Mode</label>
          </div>
            
            {/* TODO: make and fix this multicolor Theme*/}

          {/* <div className={`form-check form-switch mx-1 text-${props.mode ==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick= {props.toggleMode} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
              <label className="form-check-label" htmlFor="inlineRadio1">Enable {props.mode==='light'?'dark':'light'} Mode</label>
          </div>
          <div className={`form-check form-switch mx-1 text-${props.mode ==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick= {props.toggleGreyMode} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
              <label className="form-check-label" htmlFor="inlineRadio2">Grey</label>
          </div>
          <div className={`form-check form-switch mx-1 text-${props.mode ==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick= {props.toggleGreyMode}  type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
              <label className="form-check-label" htmlFor="inlineRadio3">Neavy</label>
          </div> */}

        </div>
      </nav>
  )
}
Navbar.propTypes = {
    title : PropTypes.string.isRequired
}
