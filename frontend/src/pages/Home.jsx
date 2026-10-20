import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate=useNavigate();
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
     try {
    const result = await axios.get("http://localhost:8080/api/user/getAll");
    setUser(result.data);
     } catch (error) {
    console.log("Server error");
  }
  };
  const handleView=(id)=>
  {
    // alert(id);
    navigate(`/user/${id}`);
  }

  // const handleEdit=(id)=>
  // {
  //   navigate(`/edit/${id}`);
  // }

  const handleDelete= async (id)=>
  {
    const isConfirm= confirm("Are you Sure to you want to delete This Data !")
    if(!isConfirm)
    {
      return;
    }
    try{
    const res=await axios.delete(`http://localhost:8080/api/user/delete/${id}`);
    alert(res.data);
  }catch(error)
  {
    console.log(error);
  }
   useEffect(() => {
    loadUser();
    handlefectch();
  }, []);
}
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 p-4">
            <table className="table table-striped border shadow rounded-2">
              <thead>
                <tr className="text-center">
                  <th scope="col">S.N</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user,index) => (
                  <tr key={index} className="text-center" >
                    <th scope="row" >{index+1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn sm-btn btn-primary shadow mx-2" onClick={()=>handleView(user.id)}>View</button>
                        <button className="btn sm-btn btn-outline-info shadow mx-2" onClick={()=>navigate(`/edit/${user.id}`)}>Edit</button>
                        <button className="btn sm-btn btn-danger shadow mx-2" onClick={()=>handleDelete(user.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
