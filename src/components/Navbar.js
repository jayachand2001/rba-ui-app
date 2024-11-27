import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">RBAC Dashboard</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav"> 
          <li className="nav-item">
            <NavLink className="nav-link" to="/users">Users</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/roles">Roles</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/permissions">Permissions</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
