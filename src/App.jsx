import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";

function App() {
  return (
    <div className=" relative">
      <nav className="w-[100%] h-[96px] flex px-10 absolute z-10 overflow-hidden">
        <div className=" flex flex-row justify-between items-center">
          <div className="w-[48px] h-[48px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle cx="24" cy="24" r="24" fill="white" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z"
                fill="#0B0D17"
              />
            </svg>
          </div>
          <div className="h-[1px] w-[473px] bg-[#fff] ml-[100px]"></div>
        </div>
        <div className="w-[50%] h-full bg-[rgba(255, 255, 255, 0.04)] bgFilter flex items-center">
          <ul className=" flex  justify-around items-center w-full">
            <li className="font-Barlow_C font-normal text-[16px] tracking-[2.7px] text-customText">
              <NavLink to="/">Home</NavLink>
            </li>
            <li  className="font-Barlow_C font-normal text-[16px] tracking-[2.7px] text-customText">
              <NavLink to="/destinaion">Destination</NavLink>
            </li>
            <li  className="font-Barlow_C font-normal text-[16px] tracking-[2.7px] text-customText">
              <NavLink to="/crew">Crew</NavLink>
            </li>
            <li  className="font-Barlow_C font-normal text-[16px] tracking-[2.7px] text-customText">
              <NavLink to="/technology">Technology</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
