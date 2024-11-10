import React, { useState } from 'react';
import './currencydropdown.css';

const initialCurrencies = [
  'USD',
  'EUR',
  'UAH',
  'GBP',
  'CAD',
];

const additionalCurrencies = [
  'JPY',
  'CNY',
  'KRW',
  'RUB',
  'INR',
];

const CurrencyDropdown = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
    setShowMore(false); 
  };

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div className="currency-dropdown">
      <div className="currency-dropdown-header">
        <span>{selectedCurrency || 'USD'}</span>
        <button className="currency-dropdown-toggle" onClick={handleDropdownToggle}>
          <span className={`currency-arrow ${isOpen ? 'open' : ''}`}>&#9660;</span>
        </button>
      </div>
      {isOpen && (
        <div className="currency-dropdown-menu-container">
          <ul className="currency-dropdown-menu">
            {initialCurrencies.map((currency, index) => (
              <li key={index} onClick={() => handleCurrencySelect(currency)}>
                <label className="currency-option">
                  <input
                    type="radio"
                    name="currency"
                    value={currency}
                    checked={selectedCurrency === currency}
                    onChange={() => handleCurrencySelect(currency)}
                  />
                  <span className="currency-dot"></span> {currency}
                </label>
              </li>
            ))}
            {showMore && additionalCurrencies.map((currency, index) => (
              <li key={index} onClick={() => handleCurrencySelect(currency)}>
                <label className="currency-option">
                  <input
                    type="radio"
                    name="currency"
                    value={currency}
                    checked={selectedCurrency === currency}
                    onChange={() => handleCurrencySelect(currency)}
                  />
                  <span className="currency-dot"></span> {currency}
                </label>
              </li>
            ))}
          </ul>
          {!showMore && (
            <button className="currency-learn-more" onClick={handleShowMore}>Learn more</button>
          )}
        </div>
      )}
    </div>
  );
};

export default CurrencyDropdown;
