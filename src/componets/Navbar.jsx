import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg  navColor">
  <div className="container">
    <a className="navbar-brand" href="#">Movie Library App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
        <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to="/list">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/search"> Search</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
