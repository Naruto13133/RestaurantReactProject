import React, { useState } from 'react';
import ProfileNavigation from './ProfileNavigation';
import { Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import Orders from './Orders';
import Favorites from './Favorites';
import Events from './Events';

const Profile = () => {
  const [openSideBar, setOpenSideBar] = useState(true);

  return (
    <div className="lg:flex justify-between">
      {/* Sidebar Section */}
      <div className="sticky top-[64px] h-[calc(100vh-64px)] lg:w-[20%]">
        {/* ProfileNavigation is the sidebar, ensure it's below the top bar */}
        <ProfileNavigation open={openSideBar} />
      </div>

      {/* Content Section */}
      <div className="lg:w-[80%] p-4">
       <Routes>
          <Route path="/" element={<UserProfile></UserProfile>}></Route>
          <Route path="/orders" element={<Orders></Orders>}></Route>
          <Route path="/favorites" element={<Favorites></Favorites>}></Route>
          <Route path="/events" element={<Events></Events>}></Route>
       </Routes>
      </div>
    </div>
  );
};

export default Profile;
