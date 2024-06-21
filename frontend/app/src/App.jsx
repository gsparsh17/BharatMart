import LocomotiveScroll from 'locomotive-scroll';
import './App.css'
import Navbar from './components/Navbar'
import React, { useEffect, useRef } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Courses from "./routes/Courses";
import Shop from "./routes/Shop";
import Workshops from "./routes/Workshop";
import Profile from "./routes/Profile";
import Register from "./routes/Register";

function App() {
  const scroll = new LocomotiveScroll();
  return (
    <div className='bo w-full min-h-screen text-sky-500 no-scrollbar'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/NearBy_Shops" element={<Shop/>}/>
        <Route path="/Top_Products" element={<Workshops/>}/>
        <Route path="/Cart" element={<Courses/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    <Navbar/>
    </div>
  )
}

export default App
