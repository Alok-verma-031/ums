import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import ViewUser from "./pages/ViewUser";
import EditUser from "./pages/EditUser";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/registration" element={<Register/>}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/adduser" element={<AddUser />}></Route>
          <Route path="/user/:id" element={<ViewUser/>}></Route>
          <Route path="/edit/:id" element={<EditUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
