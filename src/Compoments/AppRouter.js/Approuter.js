import React from 'react'
import "../../App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Firstapi from '../FirstApi/Firstapi';
import Secondapi from '../SecondApi/Secondapi';
import Thirdapi from '../ThirdApi/Thirdapi';
import Fourapi from '../FourApi/Fourapi';
import Fiveapi from '../FiverApi/Fiveapi';


function Approuter() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Firstapi />} />
          <Route path="/Secondapi" element={<Secondapi />} />
          <Route path="/Thirdapi" element={<Thirdapi />} />
          <Route path="/Fourapi" element={<Fourapi />} />
          <Route path="/Fiveapi" element={<Fiveapi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Approuter