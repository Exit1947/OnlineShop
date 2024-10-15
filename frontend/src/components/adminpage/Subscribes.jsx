import React from 'react';
import premiumImage from './../../img/Rectangle 24020.png';
import filmImage from './../../img/Rectangle 24020 (1).png';
import musicImage from './../../img/Rectangle 40444.png';
import premiumIcon from './../../img/Group 1455 (1).png';
import filmIcon from './../../img/Group 1171276561.png';
import musicIcon from './../../img/Group 1171276562.png';
import lockIcon from './../../img/Vector (2).png';


const subscriptions = [
  {
    id: 1,
    name: "Premium",
    description: "Omnify Premium is free premium delivery from Omnify with restrictions on the number of orders.",
    validity: "20/03/2024",
    status: "bought",
    image: premiumImage,
    icon: premiumIcon,
    buttonLabel: "Read more",
    buttonType: "default"
  },
  {
    id: 2,
    name: "Film",
    description: "Your access to movies, TV, and add-on subscriptions will vary while you’re abroad.",
    validity: "00/00/0000",
    status: "locked",
    image: filmImage,
    icon: filmIcon,
    buttonLabel: "Try Free",
    buttonType: "lock"
  },
  {
    id: 3,
    name: "Music",
    description: "Your access to movies, TV, and add-on subscriptions will vary while you’re abroad.",
    validity: "00/00/0000",
    status: "locked",
    image: musicImage,
    icon: musicIcon,
    buttonLabel: "Try Free",
    buttonType: "lock"
  }
];

const Subscribes = () => {
  return (
    <div className="subscribes-container">
      <h2>Your Subscribes</h2>
      <hr className="grey-line" />
      <div className="subscribes-list">
        {subscriptions.map((subscription) => (
          <div className="subscribe-item" key={subscription.id}>
            <img src={subscription.image} alt={subscription.name} className="subscribe-image" />
            <div className="subscribe-details">
              <div className="subscribe-info">
                <h3>{subscription.name}</h3>
                <p>{subscription.description}</p>
                <p>Validity: {subscription.validity}</p>
                <p>Status: <span className={subscription.status === "bought" ? "bought-status" : "locked-status"}>{subscription.status}</span></p>
              </div>
              {subscription.buttonType === "default" ? (
                <button className="read-more-button">{subscription.buttonLabel}</button>
              ) : (
                <button className="try-free-button">{subscription.buttonLabel}</button>
              )}
              {subscription.status === "locked" && <img src={lockIcon} alt="lock icon" className="lock-icon" />}
              <img src={subscription.icon} alt={subscription.name} className="subscription-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscribes;