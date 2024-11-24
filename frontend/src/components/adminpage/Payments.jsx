import React, { useState } from 'react';
import cardImage1 from './../../img/Group 1538.png'; 
import cardImage2 from './../../img/Group 1538 (1).png';
import cardImage3 from './../../img/Group 1539.png';

const Payments = () => {
  const [cards, setCards] = useState([
    { id: 1, name: 'Card for payment', expiry: '07/2030', image: cardImage1 },
    { id: 2, name: 'Business card', expiry: '03/2026', image: cardImage2 },
    { id: 3, name: 'Omnify Gift Card', expiry: 'Balance: $0.00', image: cardImage3 },
  ]);

  const [favoriteCard, setFavoriteCard] = useState(null);

  const toggleFavorite = (cardIndex) => {
    setFavoriteCard(favoriteCard === cardIndex ? null : cardIndex);
  };

  const deleteCard = (cardId, cardName) => {
    const confirmation = window.confirm(`Are you sure you want to delete ${cardName}?`);
    if (confirmation) {
      setCards(prevCards => prevCards.filter(card => card.id !== cardId)); 
    }
  };

  return (
    <div className="payments-container">
      <h1 className="title">Your Payments</h1>
      <button className="add-card-button">Add a new card</button>
      <hr className="separator" />
      
      {cards.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image} alt={card.name} className="card-image" />
          <div className="card-info">
            <h2>{card.name}</h2>
            <p>{card.expiry}</p>
          </div>
          <div className="card-actions">
            <span
              className={`heart-icon ${favoriteCard === card.id ? 'active' : ''}`}
              onClick={() => toggleFavorite(card.id)}
            >
              ❤️
            </span>
            <span className="trash-icon" onClick={() => deleteCard(card.id, card.name)}>
              🗑️
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Payments;