import React from 'react';
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div style={{ backgroundColor: '#333', padding: '10px 0' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', justifyContent: 'center' }}>
        <li style={{ padding: '14px 20px' }}>
          <Link to="/home" >
          <h1 style={{ color: 'white', fontSize: '18px', margin: 0, cursor: 'pointer', transition: 'color 0.3s ease-in-out' }}>
            Home
          </h1>
          </Link>

        </li>
        <li style={{ padding: '14px 20px' }}>
        <Link to="/userdetails" >
          <h1 style={{ color: 'white', fontSize: '18px', margin: 0, cursor: 'pointer', transition: 'color 0.3s ease-in-out' }}>
            Users
          </h1>
          </Link>
        </li>
        <li style={{ padding: '14px 20px' }}>
        <Link to="/adduser" >
          <h1 style={{ color: 'white', fontSize: '18px', margin: 0, cursor: 'pointer', transition: 'color 0.3s ease-in-out' }}>
            New User
          </h1>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
