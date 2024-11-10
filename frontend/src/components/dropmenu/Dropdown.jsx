import React, { useState } from 'react';
import './dropdown.css';

const initialCountries = [
'Ukraine',
 'USA',
 'Canada',
 'Germany',
 'France',
];

const additionalCountries = [
'Italy',
 'Spain',
 'Japan',
 'China',
 'India',
];

const Dropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setShowMore(false); 
  };

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header">
        <span>{selectedCountry || 'Ukraine'}</span>
        <button className="dropdown-toggle" onClick={handleDropdownToggle}>
          <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9660;</span>
        </button>
      </div>
      {isOpen && (
        <div className="dropdown-menu-container">
          <ul className="dropdown-menu">
            {initialCountries.map((country, index) => (
              <li key={index} onClick={() => handleCountrySelect(country)}>
                <label className="country-option">
                  <input
                    type="radio"
                    name="country"
                    value={country}
                    checked={selectedCountry === country}
                    onChange={() => handleCountrySelect(country)}
                  />
                  <span className="dot"></span> {country}
                </label>
              </li>
            ))}
            {showMore && additionalCountries.map((country, index) => (
              <li key={index} onClick={() => handleCountrySelect(country)}>
                <label className="country-option">
                  <input
                    type="radio"
                    name="country"
                    value={country}
                    checked={selectedCountry === country}
                    onChange={() => handleCountrySelect(country)}
                  />
                  <span className="dot"></span> {country}
                </label>
              </li>
            ))}
          </ul>
          {!showMore && (
            <button className="learn-more" onClick={handleShowMore}>Learn more</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;


