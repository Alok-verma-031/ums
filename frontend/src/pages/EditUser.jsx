import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const EditUser = () => {
  const {id}=useParams();
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
  });

  const handelChange = (e) => {
    setData(() => ({ ...data, [e.target.name]: e.target.value }));
  };
  useEffect(()=>{
    loadData();
  },[id]);
  const handelSubmit = async (e) => {
    e.preventDefault();
    const isConfirm=confirm("Are you sure to want to change the data !")
    if(isConfirm)
    {
    try {
      const result = await axios.put(
        `http://localhost:8080/api/user/update/${id}`,
        data
      );
      alert(result.data);
    } catch (error) {
      console.error(error);
      alert("server Error");
    }
  }
  };

  const loadData= async ()=>
  {
    try{
    const res=await axios.get(`http://localhost:8080/api/user/getUser/${id}`);
    setData(res.data);
    // console.log(res.data);
    }catch(error)
    {
      console.error(error);
    }
  }
  return (
    <>
      <div className="container">
        <h3 className="text-center mt-4">
          <b>
            Edit <span className="text-warning">User</span>
          </b>
        </h3>
        <div className="row">
          <div className="mb-3 col-sm-6 mx-auto  shadow p-4 border-black border-3 rounded-4 mt-4">
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
                Save
              </button>
              <button type="reset" className="btn btn-danger ms-4 mt-4">
                {" "}
                Cancel
              </button>
              <Link
                to="/"
                className="btn btn-warning text-decoration-none mt-4 mx-5"
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

export default EditUser;
