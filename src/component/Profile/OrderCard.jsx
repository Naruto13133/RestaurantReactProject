import { Button, Card } from '@mui/material';
import React from 'react';

const OrderCard = () => {
  return (
    <Card className="flex justify-between items-center p-5">
      <div className='flex items-center  space-x-5'>
        <img className='h-[16] w-[16]' src=""></img>
        <div>
            <p>Biryani</p>
            <p>$99</p>
        </div>
      </div>
      <div>
        <Button variant='contained' className ="cursor-not-allowed">
            Completed
        </Button>
      </div>
    </Card>
  );
}

export default OrderCard;
