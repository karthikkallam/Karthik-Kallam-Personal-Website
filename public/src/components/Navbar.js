import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { TypeAnimation } from 'react-type-animation';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
        <TypeAnimation
          sequence={[
            "Karthik Kallam", 3000,
            "Software Engineer", 3000,
            "Game Developer & Chess Enthusiast", 3000
          ]}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
        />
      </h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/currently-making">Currently Making</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
