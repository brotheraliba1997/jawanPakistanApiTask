import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comment from "../Screens/DashboardScreen/comment";
import Dashboard from "../Screens/dashboard";
import Home from "../Screens/home";
import Login from "../Compoments/SMLogin";
import Signup from "../Compoments/SMSignup";
import Institute from "../Screens/InstituteScreens/institute";
import ProtectedRoute from "./protectedroute";
import Student from "../Screens/StudentScreen/student";
import Busservices from "../Screens/busServices/busServices";
import DayPickter from "../Screens/DayPickter";

function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/Dashboard/*" element={<Dashboard />}></Route>
        <Route path="/Services" element={<Busservices />}></Route>
        <Route path="/daypicker" element={<DayPickter />}></Route>


      
        
      
      </Routes>
    </BrowserRouter>
  );
}

export default Approuter;
