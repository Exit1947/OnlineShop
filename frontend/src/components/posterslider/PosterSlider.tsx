import React, { useState, useEffect  } from 'react';
import './posterslider.css';
import image1 from './../../img/poster1.webp'
import image2 from './../../img/poster2.webp'; 
import image3 from './../../img/poster3.webp.jpeg'; 
import image4 from './../../img/poster4.webp.jpeg'; 

const posters = [
    { image: image1, subtitle: 'Apple', title: 'IPhone 15 Pro', description: 'This is a new model with the longest battery life', buttonText: 'Shop Now', buttonClass: 'yellow-button' },
    { image: image2, subtitle: 'Shop Books', title: 'Explore titles', description: '', buttonText: 'Show More', buttonClass: 'white-button' },
    { image: image3, subtitle: 'PlayStation 5', title: 'The Ultimate Gaming Console', description: '', buttonText: 'Buy Now', buttonClass: 'white-button' },
    { image: image4, subtitle: 'Camera Nikon D3100', title: 'Digital SLR Camera with 18-55mm NIKKOR VR Lens', description: '', buttonText: 'See More', buttonClass: 'white-button' },
  ];
  
  const Poster = ({ image, subtitle, title, description, buttonText, buttonClass }) => {
    return (
      <div className="poster" style={{ backgroundImage: `url(${image})` }}>
        <div className="poster-content">
          <h3>{subtitle}</h3>
          <h1>{title}</h1>
          <p>{description}</p>
          <button className={`poster-button ${buttonClass}`}>
            {buttonText}
          </button>
        </div>
      </div>
    );
  };
  
  const PosterSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % posters.length);
      }, 5000); // Зміна кожні 5 секунд
  
      return () => clearInterval(interval);
    }, []);
  
    const goToSlide = (index) => {
      setCurrentIndex(index);
    };
  
    return (
      <div className="slider">
        <div className="slides">
          {posters.map((poster, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
            >
              <Poster
                image={poster.image}
                subtitle={poster.subtitle}
                title={poster.title}
                description={poster.description}
                buttonText={poster.buttonText}
                buttonClass={poster.buttonClass}
              />
            </div>
          ))}
        </div>
        <div className="dots">
          {posters.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    );
  };
  
  export default PosterSlider;

