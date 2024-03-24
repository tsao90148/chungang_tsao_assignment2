import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link className="navbar-brand" to="/" style={{color: 'white', textDecoration: 'none', padding: '1rem'}}>Game of Life</Link>
      <ul>
        <li>
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li>
          <Link className="nav-link" to="/game">Game</Link>
        </li>
        <li>
          <Link className="nav-link" to="/credits">Credits</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
