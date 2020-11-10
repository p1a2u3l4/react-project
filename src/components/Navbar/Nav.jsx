import React from 'react'
import './Nav.css'

import {NavLink} from 'react-router-dom';

const Nav = () => {
    return(
      <nav className="nav">
        <div className="links">
          <div><NavLink to="/Profile">Profile</NavLink></div>
          <div><NavLink to="/Messanger">Messanger</NavLink></div>
          <div><NavLink to="/Photos">Photos</NavLink></div>
          <div><NavLink to="/News">News</NavLink></div>
          <div><NavLink to="/Settings">Settings</NavLink></div>
        </div>
      </nav>
    )
}

export default Nav