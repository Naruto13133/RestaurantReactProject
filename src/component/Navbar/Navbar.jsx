import { Avatar, Badge, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { pink } from "@mui/material/colors";
import "./Navbar.css"
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {


  const [isLogedIn,setIsLogedIn] = useState(false);

  const navigate=useNavigate();
  const jwt = localStorage.getItem('token');
  const reduxJwt = useSelector((state) => state.auth.jwt);
  
  useEffect(() => {
    setIsLogedIn(!!(jwt || reduxJwt));  // set true if any token exists
  }, [jwt, reduxJwt]);


  return (
    <div className="px-5 sticky z-[100] py-3 bg-[#e91e63] lg:px-20 flex justify-between">
      <div className="flex items-center space-x-4">
        <div className="lg:mr-10 custom-pointer flex item-center space-x-4">
          <li className="logo font-semibold text-gray-300  text-2xl">
            AtmFood
          </li>
        </div>
      </div>
      <div className="flex items-center space-x-2  lg:space-x-10">
        <div className="">
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        <div className="">
          {isLogedIn ? <Avatar onClick={()=>navigate("/my-profile")} sx={{ bgcolor: "white", color: pink.A400 }}>A</Avatar>:
          <IconButton onClick={()=>navigate("/account/login")}>
            <Person></Person>
            </IconButton>}
        </div>
        <div className="">
          <IconButton>
            <Badge  color="primary" badgeContent={3} > <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} /> </Badge>
            
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
