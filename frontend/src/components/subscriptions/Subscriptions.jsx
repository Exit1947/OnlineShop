import React from 'react';
import './subscriptions.css';
import image1 from './../../img/789b4e3d1c5cfb07f12539e2cf9e6af9.jpeg'; 
import image2 from './../../img/c49aa9df182cc97207247ca3e2baca7b.jpeg';
import image3 from './../../img/ff45a67279a923d9d8f7e060bba6b623.jpeg';
import icon1 from './../../img/Group 14559.png'; 
import icon2 from './../../img/Group 1415.png';
import icon3 from './../../img/Group 1455.png';

const subscriptions = [
    { icon: icon1, src: image1, description: 'Omnify Premium is free premium delivery from Omnify restrictions on the number of orders. subscription', duration: '1 Month', price: 'FREE' },
    { icon: icon2, src: image2, description: 'Unlimited access to 100 million songs.', duration: '1 Month', price: 'FREE' },
    { icon: icon3, src: image3, description: "Your access to movies, TV, and add-on subscriptions will vary while you're abroad.", duration: '1 Month', price: 'FREE' }
  ];
  
  const Subscriptions = () => {
    return (
      <div className="subscriptions-wrapper">
        <div className="subscriptions-header">
          <h2>Subscribes</h2>
          <div className="subscriptions-categories">
            <span>All Subscriptions</span>
            <span>➔</span>
          </div>
        </div>
        <div className="subscriptions-container">
          {subscriptions.map((sub, index) => (
            <div key={index} className="subscription-item">
              <img src={sub.src} alt={sub.title} className="subscription-image" />
              <div className="subscription-content">
                <div className="subscription-icon">
                  <img src={sub.icon} alt={sub.title} />
                </div>
                <p>{sub.description}</p>
                <p className="subscription-duration">{sub.duration} <span>{sub.price}</span></p>
                <button className="subscription-button">Try free</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Subscriptions;