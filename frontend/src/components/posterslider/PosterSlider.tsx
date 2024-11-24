import React, { useState, useEffect  } from 'react';
import './posterslider.css';
import image1 from './../../img/66d28c94659be734850fe7ebb4746399_40571_1430x946 (1).webp'
import image2 from './../../img/open-book-with-natural-element.jpg'; 
import image3 from './../../img/close-up-mannequin-table_1048944-10515181.avif'; 
import image4 from './../../img/high-angle-shot-lens-headphones-gimbal-phone_181624-43878.avif'; 

const posters = [
  {
    id: 1,
    image: image1,
    title: 'Apple',
    subtitle: 'iPhone 15 Pro',
    description: 'This is a new model with the longest battery life',
    button: 'Shop Now',
    buttonStyle: 'button-orange-outline'
  },
  {
    id: 2,
    image: image2,
    title: 'Shop Books',
    subtitle: 'explore titles',
    button: 'Show More',
    buttonStyle: 'button-gray-rounded',
    isBold: true
  },
  {
    id: 3,
    image: image3,
    title: 'Sony PlayStation 5',
    items: ['Incredible speed', 'Amazing games', 'Full immersion'],
    button: 'Shop Now',
    buttonStyle: 'button-gray-rounded'
  },
  {
    id: 4,
    image: image4,
    title: 'Camera Nikon D3100',
    description: 'Digital SLR Camera with 18-55mm NIKKOR VR Lens',
    button: 'See more',
    buttonStyle: 'button-gray-rounded'
  }
];

const PosterSlider = () => {
  const [currentPoster, setCurrentPoster] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPoster((prevPoster) => (prevPoster + 1) % posters.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index) => {
    setCurrentPoster(index);
  };

  return (
    <div className="poster-slider">
      {posters.map((poster, index) => (
        <div
          key={poster.id}
          className={`poster ${index === currentPoster ? 'active' : ''}`}
          style={{ display: index === currentPoster ? 'block' : 'none' }}
        >
          <img src={poster.image} alt={poster.title} />
          <div className="poster-content">
            <h2>{poster.title}</h2>
            <h1>{poster.subtitle}</h1>
            {poster.description && <p>{poster.description}</p>}
            {poster.items && (
              <ul>
                {poster.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
            <button className={`shop-now-button ${poster.buttonStyle}`}>{poster.button}</button>
          </div>
        </div>
      ))}
      <div className="indicator">
        {posters.map((_, index) => (
          <span
            key={index}
            className={index === currentPoster ? 'active' : ''}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PosterSlider;


