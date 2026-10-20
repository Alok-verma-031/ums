import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
    <div className="row p-4 bg-img">
        <div className="col-sm-5 px-4 m-3 ">
            <div className="row">
                <div className="col-sm-7">
                     <h6 className='bg-secondary rounded-4 text-center py-1 text-warning'>Simple . Secure . Esay to Use</h6>
                </div>
            </div>
            <h1 className='fw-bold'>Manage Your Users <br/> With Ease</h1>
            <p>A simple and modern platform to register, login and manage user data. Built with Spring Boot (Backend) and React (Frontend).</p>
            <Link className='text-decoration-none btn btn-warning text-white' to={"/"}>
             <i className="fa-solid fa-user-plus me-2"></i> Sign Up</Link>
            <Link className='text-decoration-none btn btn-outline-warning ms-4' to={"/"}>
            <i className="fa-solid fa-right-to-bracket me-2"></i> Sign in</Link>
        </div>
        
    </div>
    </>
  )
}

export default Hero