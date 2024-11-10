import React, { useState } from 'react';
import './languagedropdown.css';

const initialLanguages = [
"Ukrainian",
 'English',
 'French',
 'German',
 'Spanish',
];

const additionalLanguages = [
 'Italian',
 'Chinese',
 'Japanese',
 'Korean',
  
];

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    setShowMore(false); // Скидання стану showMore
  };

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div className="language-dropdown">
      <div className="language-dropdown-header">
        <span>{selectedLanguage || 'ENG'}</span>
        <button className="language-dropdown-toggle" onClick={handleDropdownToggle}>
          <span className={`language-arrow ${isOpen ? 'open' : ''}`}>&#9660;</span>
        </button>
      </div>
      {isOpen && (
        <div className="language-dropdown-menu-container">
          <ul className="language-dropdown-menu">
            {initialLanguages.map((language, index) => (
              <li key={index} onClick={() => handleLanguageSelect(language)}>
                <label className="language-option">
                  <input
                    type="radio"
                    name="language"
                    value={language}
                    checked={selectedLanguage === language}
                    onChange={() => handleLanguageSelect(language)}
                  />
                  <span className="language-dot"></span> {language}
                </label>
              </li>
            ))}
            {showMore && additionalLanguages.map((language, index) => (
              <li key={index} onClick={() => handleLanguageSelect(language)}>
                <label className="language-option">
                  <input
                    type="radio"
                    name="language"
                    value={language}
                    checked={selectedLanguage === language}
                    onChange={() => handleLanguageSelect(language)}
                  />
                  <span className="language-dot"></span> {language}
                </label>
              </li>
            ))}
          </ul>
          {!showMore && (
            <button className="language-learn-more" onClick={handleShowMore}>Learn more</button>
          )}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;

