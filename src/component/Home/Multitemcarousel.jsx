import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from './CarouselItem';
import { topmeal } from './Topmeal';

function Multitemcarousel() {
  const settings = { 
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots:true,
    autoplay:true,
    autoplaySpeed: 2000,
    arrows:false
  };

  const slideData = [
    { id: 1, title: "Slide 1", image: "/path/to/image1.jpg" },
    { id: 2, title: "Slide 2", image: "/path/to/image2.jpg" },
    // ... more slide data
  ];

  return (
    <div className="slider-container "> 
      <Slider {...settings}>
        {topmeal.map((item) => (
          <CarouselItem key={item.title} title={item.title} image={item.image} /> 
        ))}
      </Slider>
    </div>
  );
}

export default Multitemcarousel;