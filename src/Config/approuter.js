import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comment from "../Screens/DashboardScreen/comment";
import Dashboard from "../Screens/dashboard";
import Home from "../Screens/home";
import Login from "../Compoments/SMLogin";
import Signup from "../Compoments/SMSignup";
import Institute from "../Screens/InstituteScreens/institute";
import ProtectedRoute from "./protectedroute";

function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/comment" element={<Comment />}></Route>
        <Route
          path="dashboard/*"
          element={<ProtectedRoute Component={Dashboard} />}
        ></Route>
        <Route path="/institute/*" element={<Institute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Approuter;
