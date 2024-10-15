import React, { useState } from 'react';
import laptopImage from './../../img/Rectangle 24021.png'; 
import mouseImage from './../../img/Rectangle 24021 (1).png';
import mousepadImage from './../../img/Rectangle 24021 (2).png';
import iphoneImage from './../../img/Rectangle 24021 (3).png';
import searchIcon from './../../img/Vector (1).png'; 
import arrowIcon from './../../img/Frame 918.png'; 

const ordersList = [
  {
    id: 1,
    name: "Laptop Galaxy Book 3 Pro,14”",
    storage: "128 Gb",
    color: "Sierra Blue",
    price: "1 449,99 $",
    status: "Done",
    image: laptopImage,
    details: {
      seller: "Omnify.com",
      deliveryAddress: "100 FOREST DR, GREENVALE NY 11548-1205, USA",
      recipient: "Vivian Weaver",
      phone: "+1 (1) 101305620",
      email: "cookie98@gmail.com",
      paymentMethod: "Payment on receipt of goods",
      delivery: "20$",
      warranty: ["Warranty service", "Warranty card", "Electronic check"]
    }
  },
  {
    id: 2,
    name: "SVEN RX-200 USB mouse black",
    storage: "Wired",
    color: "Black",
    price: "29,99 $",
    status: "Done",
    image: mouseImage,
    details: {
      seller: "Omnify.com",
      deliveryAddress: "100 FOREST DR, GREENVALE NY 11548-1205, USA",
      recipient: "Vivian Weaver",
      phone: "+1 (1) 101305620",
      email: "cookie98@gmail.com",
      paymentMethod: "Payment on receipt of goods",
      delivery: "Free",
      warranty: ["Warranty service", "Warranty card", "Electronic check"]
    }
  },
  {
    id: 3,
    name: "Mouse pad HAVIT HV-MP839 Black",
    storage: "Control",
    color: "Black",
    price: "9,99 $",
    status: "Done",
    image: mousepadImage,
    details: {
      seller: "Omnify.com",
      deliveryAddress: "100 FOREST DR, GREENVALE NY 11548-1205, USA",
      recipient: "Vivian Weaver",
      phone: "+1 (1) 101305620",
      email: "cookie98@gmail.com",
      paymentMethod: "Payment on receipt of goods",
      delivery: "Free",
      warranty: ["Warranty service", "Warranty card", "Electronic check"]
    }
  },
  {
    id: 4,
    name: "Apple iPhone 13 Pro 128 GB",
    storage: "128 Gb",
    color: "Sierra Blue",
    price: "1 299,99 $",
    status: "Done",
    image: iphoneImage,
    details: {
      seller: "Omnify.com",
      deliveryAddress: "100 FOREST DR, GREENVALE NY 11548-1205, USA",
      recipient: "Vivian Weaver",
      phone: "+1 (1) 101305620",
      email: "cookie98@gmail.com",
      paymentMethod: "Payment on receipt of goods",
      delivery: "Free",
      warranty: ["Warranty service", "Warranty card", "Electronic check"]
    }
  }
];

const History = () => {
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedOrderId(expandedOrderId === id ? null : id);
  };

  return (
    <div className="history-container">
      <h1 className="his-orders-title">Orders History</h1>
      <div className="his-order-menu">
        <div className="his-search-container">
          <input type="text" className="his-search-bar" placeholder="Search" />
          <img src={searchIcon} alt="Search Icon" className="search-icon" />  {/* Search icon */}
        </div>
        <div className="his-dropdown-container">
          <select className="his-filter-dropdown">
            <option value="all">For all time</option>
          </select>
          <img src={arrowIcon} alt="Arrow Icon" className="dropdown-icon" />
        </div>
      </div>
      <hr className="his-orange-line" />

      <div className="his-orders-list">
        {ordersList.map((order) => (
          <div key={order.id} className="his-order-item">
            <div className="his-order-summary">
              <div className="his-order-main">
                <img src={order.image} alt={order.name} className="his-order-image" />
                <div className="his-order-info">
                  <p>{order.name}</p>
                  <p>
                    Storage: {order.storage}, Color: {order.color}
                  </p>
                  <p>Price: {order.price}</p>
                  <p className="his-order-status">{order.status}</p>
                </div>
              </div>
              <button className="his-see-more-button" onClick={() => toggleExpand(order.id)}>
                {expandedOrderId === order.id ? "See less" : "See more"}
              </button>
            </div>

            {expandedOrderId === order.id && (
              <div className="his-order-details">
                <p>Seller: {order.details.seller}</p>
                <p>Delivery address: {order.details.deliveryAddress}</p>
                <p>Recipient of the order: {order.details.recipient}, {order.details.phone}, {order.details.email}</p>
                <p>Payment method: {order.details.paymentMethod}</p>
                <p>Delivery: {order.details.delivery}</p>
                <div className="his-order-warranty">
                  {order.details.warranty.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;