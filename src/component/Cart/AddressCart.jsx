import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import { Button, Card } from '@mui/material';

const AddressCart = ({item,showButton,handleSelectAddress}) => {
    
  return (
    <Card className= ' flex gap-5 w-64 p-5   '>
        <HomeIcon/> 
        <div className="text-gray-500 space-y-3 ">
            <h1 className='font-semibold text-white text-lg'>Home</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, deleniti.</p>
            {showButton && <Button variant='outlined' fullWidth onClick={()=>handleSelectAddress(item)}>SELECT</Button>}
            </div>  
    </Card>
  );
}

export default AddressCart;
