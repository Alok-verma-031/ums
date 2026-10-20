import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const handleView = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/user/getUser/${id}`,
      );
      setUser(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleView(id);
  }, [id]);
  // const n=id;
  return (
    <>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow border-0 rounded-4">
              <div className="card-header bg-primary text-white text-center py-4 rounded-top-4">
                <h3 className="mb-0">User Profile</h3>
                <p className="mb-0 mt-2">Welcome to your profile</p>
              </div>

              <div className="card-body p-4">
                <div className="text-center mb-4">
                  <div
                    className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center"
                    style={{ width: "80px", height: "80px", fontSize: "40px" }}
                  >
                    {/* {user.name.charAt(0)} */}
                    <b>{user?.name?.charAt(0)?.toUpperCase()}</b>
                  </div>

                  <h4 className="mt-3 mb-1">{user.name}</h4>
                  <span className="badge bg-success">Active User</span>
                </div>

                <hr />

                <table className="table table-bordered table-hover">
                  <thead className="text-light bg-dark p-3">
                    <th>Key</th>
                    <th>Value</th>
                  </thead>
                  <tbody >
                    <tr>
                      <th>User ID </th>
                      <td>{id}</td>
                    </tr>
                    <tr>
                      <th>Full Name </th>
                      <td>{user.name}</td>
                    </tr>
                    <tr>
                      <th> Email Adddress </th>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <th>UserName </th>
                      <td>{user.username}</td>
                    </tr>
                    <tr>
                      <td>
                        <button className="btn btn-primary  ">
                          <Link to={`/edit/${id}`} className="text-decoration-none text-light">Edit Profile</Link>
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-outline-secondary ">
                          <Link to='/edit/n' className="text-decoration-none text-dark">Show Users</Link>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewUser;
