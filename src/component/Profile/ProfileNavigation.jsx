import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import "./profile.css";
import { useNavigate } from "react-router-dom";

const menu = [
  {
    title: "orders",
    icon: <ShoppingBagIcon />,
  },
  {
    title: "Favorites",
    icon: <FavoriteIcon />,
  },
  {
    title: "Address",
    icon: <HomeIcon />,
  },
  {
    title: "Payment",
    icon: <AccountBalanceWalletIcon />,
  },
  {
    title: "Notification",
    icon: <EventIcon />,
  },
  {
    title:"Events",
    icon:<EventIcon />

  },
  {
    title: "Logout",
    icon: <LogoutIcon />,
  },
];
const ProfileNavigation = ({ open, handleClose }) => {
  const isLargeScreen = useMediaQuery("(max-width:1080px)");
  const navigate = useNavigate();
  const handelNavigate = (item)=>{
    navigate(`/my-profile/${item.title.toLowerCase()}`)
  }
  
  return (
    <div className=" pt-24 mt-24 z-0">
      {/* <h1>hello</h1> */}
      <Drawer
        className=" test mt-10 pt-20 "
        onClose={handleClose}
        variant={!isLargeScreen ? "permanent" : "temporary"}
        open={!isLargeScreen ? true : open}
        // open={true}
        // variant="temporary"
        anchor="left"
        sx={{
            zIndex:1,
          position: "sticky",
          marginTop: "64px", // Adjust this based on the top bar height
        }}
      >
        <div className=" w-[50vw] lg:w-[20vw] h=[100vh] flex flex-col  justify-center text-xl gap-8 pt-24">
          {menu.map((i, iterator) => (
            <>
              <div onClick={()=>handelNavigate(i)} className=" px-5 flex items-center space-x-5 cursor-pointer">
                {i.icon}
                <span>{i.title}</span>
              </div>
              {iterator !== menu.length - 1 && <Divider></Divider>}
            </>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default ProfileNavigation;
