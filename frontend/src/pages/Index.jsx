import React from "react";
import MainNav from "../component/MainNav";
import Hero from "../component/Hero";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const Index = () => {
  return (
    <>
      <MainNav />
      <Hero />
      <div className="row">
        <div className="col-sm-12 p-5 text-center">
          <h2 className=" fw-bolder">
            What You <span className="text-warning">Can Do</span>
          </h2>
          <p>
           Explore the features and manage your data easily.
          </p>
        </div>
      </div>
      <div className="row ">
        <div className="col-sm-3 p-5 text-center">
          <Link className="text-decoration-none text-dark" to={"/"}>
            <div>
                <i className="fa-solid fa-user-plus me-2 rounded-circle"></i>
              <h6>Register</h6>
              <small>
                Create your account in just a few steps.
              </small>
            </div>
          </Link>
        </div>
        <div className="col-sm-3 p-5 text-center">
          <Link className="text-decoration-none text-dark" to={"/"}>
            <div>
                <i className="fa-solid fa-right-to-bracket me-2"></i>
              <h6>Login</h6>
              <small>
               Access your account securely.
              </small>
            </div>
          </Link>
        </div>
        <div className="col-sm-3 p-5 text-center">
          <Link className="text-decoration-none text-dark" to={"/"}>
            <div>
                 <i className="fa-solid fa-eye me-2"></i>
              <h6>View Users</h6>
              <small>
                See all registered users in one place. 
              </small>
            </div>
          </Link>
        </div>
        <div className="col-sm-3 p-5 text-center">
          <Link className="text-decoration-none text-dark" to={"/"}>
            <div>
                 <i className="fa-solid fa-pen-to-square me-2"></i>
              <h6>Perform CRUD</h6>
              <small>
               Add, update, and delete user data easily.
              </small>
            </div>
          </Link>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Index;
