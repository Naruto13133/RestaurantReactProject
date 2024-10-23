import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
        
      <Card sx={{width:345}}>
        <CardMedia
        
        sx={{height:345}}
        image="https://media.istockphoto.com/id/1398630614/photo/bacon-cheeseburger-on-a-toasted-bun.jpg?s=612x612&w=0&k=20&c=3HWrUVnS-FsJETFlCWnDH2-1ekJ0ic3T3XPrhLjpo98=">
        </CardMedia>
        <CardContent>
        <Typography variant='h5' >
            Indian Fast Food
        </Typography>
        <Typography variant='body2' >
            50% off on your first order!
        </Typography>
        <div className="py-2 space-y-2">
            <p>
                {"Mumbai"}
            </p>
            <p className="text-sm text-blue-500 ">February 14, 2024 12:00AM</p>
            <p className="text-sm text-red-500 ">February 15, 2024 12:00AM</p>
        </div>
        </CardContent>
        {true && <CardActions>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </CardActions>}
      </Card>
    </div>
  );
}

export default EventCard;
