import React, { useState } from 'react';
import './customcarousel.css'

import image1 from './../../img/Rectangle 23846 (7).png'; 
import image2 from './../../img/Rectangle 23846 (1).png';
import image3 from './../../img/Rectangle 23846 (2).png';
import image4 from './../../img/Rectangle 23846 (3).png';
import image5 from './../../img/Rectangle 23846 (8).png';
import image6 from './../../img/Rectangle 238467.png';
import image7 from './../../img/Rectangle 23846 (4).png';
import image8 from './../../img/Rectangle 23846 (5).png';
import image9 from './../../img/Rectangle 23846 (6).png';

const images = [
  { src: image1, label: 'Clothes' },
  { src: image2, label: 'Trousers' },
  { src: image3, label: 'Shoes' },
  { src: image4, label: 'Hats' },
  { src: image5, label: 'Travel' },
  { src: image6, label: 'Jewelry' },
  { src: image7, label: 'Books & Comics' },
  { src: image8, label: 'Cosmetic' },
  { src: image9, label: 'TV & Laptop' },
];

const CustomCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div className="custom-carousel-container">
        <div className="custom-carousel-header">
          <div className="custom-carousel-title">
            <h2>Browse by Category</h2>
            <div className="custom-all-categories">
              <span>All Categories</span>
              <span className="custom-arrow-right">&gt;</span>
            </div>
          </div>
          <div className="custom-arrows">
            <button className="custom-arrow custom-left-arrow" onClick={prevSlide}>
              &lt;
            </button>
            <button className="custom-arrow custom-right-arrow" onClick={nextSlide}>
              &gt;
            </button>
          </div>
        </div>
        <div className="custom-carousel">
          <div className="custom-carousel-images">
            {images.slice(currentIndex, currentIndex + 8).map((image, index) => (
              <div key={index} className="custom-carousel-item">
                <img src={image.src} alt={image.label} />
                <div className="custom-carousel-item-line"></div>
                <p>{image.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default CustomCarousel;