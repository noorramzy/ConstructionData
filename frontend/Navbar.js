import { NavLink } from 'react-router-dom';
import './Navbar.css';
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
        <div className="links">
      <NavLink exact to="/" className="navbar-link">
        Home
      </NavLink>
      <NavLink to="/floorplan" className="navbar-link">
        Floorplan
      </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
