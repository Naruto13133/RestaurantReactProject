import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate(); // Use `useNavigate` inside the component
  const dispatch = useDispatch();
  
  const handleLogout=()=>{
    dispatch(logout());
    navigate('/'); // Use `navigate` after the logout action
  }
  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>  
        <div className="flex flex-col items-center justify-center ">
          <AccountCircleIcon sx={{fontSize:"9rem"}} />
          <h1 className='py-5 text-2xl font-semibold'>Atm </h1>
          <p>Email : test@1213.com</p>
          <Button variant='contained' onClick={handleLogout} sx={{margin:"2rem 0rem"}}>Logout</Button>
        </div>
    </div>
  );
}

export default UserProfile;
