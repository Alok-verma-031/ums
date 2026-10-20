import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import MainNav from "../component/MainNav";
import axios from "axios";

const Register = () => {

    const [data,setData]=useState({
        name: "",
        password: "",
        email: "",
        contactno: "",
        age: "",
        address: "",
      });

      const handleChanges= (e)=>{setData({...data,[e.target.name]:e.target.value})};
      const handelsubmit = async (e)=>{
        e.preventDefault();
        try{
        const res=await axios.post('http://localhost:8080/api/auth/register',data);
        setData(res.data);
        alert(res.data);
        }catch(er)
        {
            console.log(er);
            alert("Server error !")
        }

      }
  return (
    <>
      <MainNav />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow p-4">
              <h2 className="text-center mb-4 fw-bolder">
                Registration <span className="text-warning">form</span>
              </h2>

              <form onSubmit={handelsubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={handleChanges}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={handleChanges}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChanges}
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Age</label>
                  <input
                    type="number"
                    name="age"
                    onChange={handleChanges}
                    className="form-control"
                    placeholder="Enter your age"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <textarea
                    name="address"
                    className="form-control"
                    onChange={handleChanges}
                    placeholder="Enter your address"
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Contact Number</label>
                  <input
                    type="tel"
                    name="contactno"
                    className="form-control"
                    onChange={handleChanges}
                    placeholder="Enter your contact number"
                  />
                </div>

                <button type="submit" className="btn btn-warning w-100">
                  <i className="fa-solid fa-user-check me-2"></i>
                  Register
                </button>
                <p className="text-center m-2">
                  if you have an Account ? <Link to="/login">Sign in</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
