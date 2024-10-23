import React from 'react';
import EventCard from './EventCard';

const Events = () => {
  return (
    <div className='px-5 mt-5 flex flex-wrap gap-5'>
      {[1,1,1].map((i)=><EventCard/>)}
      {/* hello */}
    </div>
  );
}

export default Events;
