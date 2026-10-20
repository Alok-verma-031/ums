import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import MainNav from "../component/MainNav";
import axios from "axios";

const Login = () => {
    const navigate= useNavigate();

    const [data,setData]= useState({
        email:"",
        password:""
    })

    const handleChange=(e)=>{
      setData({...data,[e.target.name]:e.target.value});
    }

    const handelsubmit = async (e)=>
    {
        e.preventDefault();
        try{
        const res=await axios.post('http://localhost:8080/api/auth/login',data);
        alert(res.data);
        navigate('/home')
        }catch(er)
        {
            console.log(er);
            alert("Server Error");
        }
    }
  return (
    <>
      <MainNav />
      <div className="container my-5">
        <div className="row justify-content-center my-4">
          <div className="col-md-5">
            <div className="card shadow p-4">
              <h2 className="text-center mb-4 fw-bold">
                User Login <span className="text-warning">Page</span>
              </h2>

              <form onSubmit={handelsubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-warning w-100">
                  <i className="fa-solid fa-lock me-2"></i>
                  Login
                </button>
              </form>

              <p className="text-center mt-3 mb-0">
                Don't have an account? <Link to="/Registration">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
