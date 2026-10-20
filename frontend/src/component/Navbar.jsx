import React from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            <h6>Full Stack <span className="text-warning">Application</span></h6>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link className="text-decoration-none text-light" to="/adduser"><button className="btn btn-outline-light">Add User</button></Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
