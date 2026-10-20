import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddUser = () => {
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
  });

  const handelChange = (e) => {
    setData(() => ({ ...data, [e.target.name]: [e.target.value] }));
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:8080/api/user/create",
        data  
      );
      alert("User is add successfully !");
    } catch (error) {
      console.error(error);
      alert("server Error");
    }
  };
  return (
    <>
      <div className="container">
        <h3 className="text-center mt-4">
          <b>
            Add New <span className="text-warning">User</span>
          </b>
        </h3>
        <div className="row">
          <div class="mb-3 col-sm-6 mx-auto  shadow p-4 border-black border-3 rounded-4 mt-4">
            <form method="post" action="" onSubmit={handelSubmit}>
              <label for="name" className="form-label mt-2">
                Enter Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Name"
                name="name"
                value={data.name}
                required
                onChange={handelChange}
              />
              <label for="email" className="form-label mt-4">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="example@gmail.com"
                name="email"
                value={data.email}
                required
                onChange={handelChange}
              />
              <label for="name" className="form-label mt-4">
                Enter UserName
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter User Name"
                name="username"
                value={data.username}
                required
                onChange={handelChange}
              />
              <button type="submit" className="btn btn-primary mt-4">
                {" "}
                Add User
              </button>
              <Link
                to="/"
                className="btn btn-outline-info text-decoration-none mt-4 mx-5"
              >
                View All
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
