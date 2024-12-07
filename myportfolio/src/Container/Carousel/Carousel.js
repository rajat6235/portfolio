import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import ScrollDown from "../../utilities/ScrollDown/ScrollDown";
import "./carousal.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images
const slides = [
  {
    src: require("../../assets/carousal/slide1.webp"),
    alt: "First slide"
  },
  {
    src: require("../../assets/carousal/slide2.webp"),
    alt: "Second slide"
  },
  {
    src: require("../../assets/carousal/slide3.webp"),
    alt: "Third slide"
  }
];

const CustomCarousel = () => {
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {

    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.src;
      img.onload = () => {
        setLoadedImages(prev => {
          const newCount = prev + 1;
          if (newCount === slides.length) {
            setLoading(false);
          }
          return newCount;
        });
      };
    });
  }, []);

  return (
    <div id="home" className="carousel-container">
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
          <div style={{ color: 'white', marginLeft: '10px' }}>
            Loading... {Math.round((loadedImages / slides.length) * 100)}%
          </div>
        </div>
      )}
      
      <Carousel 
        controls={false} 
        indicators 
        interval={2500} 
        pause={false} 
        fade
        style={{ visibility: loading ? 'hidden' : 'visible' }}
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block custom-img"
              src={slide.src}
              alt={slide.alt}
              loading="lazy"
            />
          </Carousel.Item>
        ))}
      </Carousel>
      
      <ScrollDown />
    </div>
  );
};

export default CustomCarousel;