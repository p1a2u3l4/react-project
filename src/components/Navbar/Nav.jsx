import React from 'react'
import s from './Nav.css'

import {NavLink} from 'react-router-dom';

const Nav = () => {
    return(
      <nav className="nav">
        <div className="links">
          <div><NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink></div>
          <div><NavLink to="/Messanger">Messanger</NavLink></div>
          <div><NavLink to="/Photos">Photos</NavLink></div>
          <div><NavLink to="/News">News</NavLink></div>
          <div><NavLink to="/Settings">Settings</NavLink></div>
        </div>
      </nav>
    )
}

export default Nav