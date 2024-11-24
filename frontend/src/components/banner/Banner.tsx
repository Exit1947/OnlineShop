import React from 'react';
import './banner.css';
import bannerImage from './../../img/pexels-cottonbro-6055969.jpg'; 

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <img src={bannerImage} alt="Great Sale" className="banner-image" />
      <div className="banner-content">
        <h1>Great <span>Sale</span></h1>
        <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
        <button className="banner-button">Shop Now</button>
      </div>
    </div>
  );
};

export default Banner;
