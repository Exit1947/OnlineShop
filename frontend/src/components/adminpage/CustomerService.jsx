import React, { useState } from 'react';
import searchIcon from './../../img/Vector (1).png'; 


const HelpLibrary = () => {
  const [activeItem, setActiveItem] = useState('Recommended Topics');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const menuItems = [
    'Recommended Topics',
    "Where's my stuff",
    'Shipping and delivery',
    'Returns and Refunds',
    'Managing Your Account',
    'Security & Privacy',
    'Payment, Pricing and Promotions',
    'Devices & Digital Solutions',
    'Other Topic & Help sites',
  ];

  const rightColumnItems = [
    {
      title: "Find a missing package that shows as 'Delivered'",
      description:
        "Most packages arrive on time, but, sometimes, the tracking may show as 'delivered' and you don't have your package.",
    },
    {
      title: 'Late Deliveries',
      description:
        'Most packages arrive on time. Orders sometimes show up after estimated delivery date.',
    },
    {
      title: 'Track your package',
      description:
        'You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking information.',
    },
    {
      title: 'Check status of a refund',
      description: 'You can check the status of your refund in Your Orders.',
    },
    {
      title: 'Find a missing item from your package',
      description:
        'If an item is missing from your package, it may have been shipped separately.',
    },
    {
      title: 'Replace an item',
      description:
        'If you received a damaged, defective, or incorrect item sold by Amazon, you can request a replacement for a small fee.',
    },
    {
      title: 'Cancel Items or Orders',
      description:
        "You can cancel items or orders that haven't entered the shipping process yet.",
    },
  ];

  return (
    <div className="help-container">
      <h1 className="help-title">Welcome to Omnify Customer Service</h1>
      <p className="help-subtitle">
        What would you like help with today? You can quickly take care of most
        things here, or connect with us when needed.
      </p>

      <div className="help-search">
        <input
          type="text"
          className="help-search-input"
          placeholder="Type something like, 'question about a charge'"
        />
        <img src={searchIcon} alt="search" className="help-search-icon" />
      </div>

      <div className="help-content">
        <div className="help-menu">
          {menuItems.map((item) => (
            <div
              key={item}
              className={`help-menu-item ${
                activeItem === item ? 'active' : ''
              }`}
              onClick={() => handleItemClick(item)}
            >
              {item}
              {activeItem === item && <div className="help-menu-line"></div>}
            </div>
          ))}
        </div>

        <div className="help-right-column">
          {rightColumnItems.map((item, index) => (
            <div key={index} className="help-right-item">
              <h3 className="help-right-title">{item.title}</h3>
              <p className="help-right-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpLibrary;