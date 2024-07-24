import React, { useState } from 'react';
import './customposter.css';
import image1 from './../../img/3poster.jpg'; 
import image2 from './../../img/2post.jpg';
import image3 from './../../img/4poster.jpg';
import image4 from './../../img/1post.jpg';

const CustomPoster = () => {
    const [expanded, setExpanded] = useState(null); 
  
    const toggleExpand = (index) => {
      setExpanded(expanded === index ? null : index);
    };
  
    const images = [
      { src: image1, label: 'PlayStation 6' },
      { src: image2, label: 'Ipad Pro' },
      { src: image3, label: 'Samsung Galaxy' },
      { src: image4, label: 'Macbook Pro' },
    ];
  
    return (
      <div className="custom-expanding-poster-wrapper">
        <div className="custom-expanding-poster-header">
          <h2>Popular Products</h2>
          <div className="custom-view-products">
            <span>View Products</span>
            <span className="custom-arrow-right">&gt;</span>
          </div>
        </div>
        <div className="custom-expanding-poster-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`custom-expanding-poster-item ${expanded === index ? 'custom-expanded' : 'custom-collapsed'}`}
              onClick={() => toggleExpand(index)}
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="custom-overlay-button">
                <span>{image.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CustomPoster;