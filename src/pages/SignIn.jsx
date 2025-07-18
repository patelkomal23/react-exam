import React from 'react';
import { Link } from 'react-router-dom'; // use 'react-router-dom' instead of 'react-router'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4 text-warning" to="/list">🎬 MovieApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <Link className="nav-link hover-link text-white" to="/list">Popular Movies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hover-link text-white" to="/search">Search</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hover-link text-white" to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
