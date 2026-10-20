import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid text-light">
          <a className="navbar-brand text-light fw-bold" href="#"><i className="fa-solid fa-users me-2 text-white"></i>
            User Management <span className="text-warning">System</span>
          </a>
          <button
            className="navbar-toggler text-bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-5 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-Link mx-3 text-decoration-none text-light" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link mx-3 text-decoration-none text-light" aria-current="page" to={"/"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-Link mx-3 text-decoration-none text-light" aria-current="page" to={"/"}>
                  Contact
                </Link>
              </li>
            </ul>

            <button className="btn btn-warning text-light" type="submit">
              <Link className="text-decoration-none fw-bold text-white" to="/login">Sign in</Link> 
            </button>
            <button className="btn btn-outline-warning mx-3 " type="submit">
              <Link className="text-decoration-none fw-bold text-white" to="/registration">Sign Up</Link> 
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
