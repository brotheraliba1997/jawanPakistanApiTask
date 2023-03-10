import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../Screens/about";
import Comment from "../Screens/DashboardScreen/comment";
import Dashboard from "../Screens/dashboard";
import Home from "../Screens/home";

function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/comment" element={<Comment />}></Route>
        <Route path="dashboard/*" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Approuter;
