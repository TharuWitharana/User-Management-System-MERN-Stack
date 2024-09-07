import React from "react"
import { Route, Routes } from "react-router"

import './App.css';
import Home from "./Components/Home/Home";
import Users from "./Components/UserDetails/Users.js";
import AddUser from "./Components/AddUser/AddUser.js";


import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateUser from "./Components/UpdateUser/UpdateUser.js";



function App() {
  return (
    <div>


      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/userdetails" element={<Users />}></Route>
          <Route path="/adduser" element={<AddUser />}></Route>
          <Route path="/userdetails/:id" element={<UpdateUser />}></Route>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
