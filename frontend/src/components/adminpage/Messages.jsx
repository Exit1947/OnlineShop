import React, { useState } from 'react';
import searchIcon from './../../img/Vector.png';
import dropdownIcon from './../../img/chevron_right.png';


const Messages = () => {
  const [activeTab, setActiveTab] = useState('allMessages');
  const [messages, setMessages] = useState([
    {
      id: 1,
      store: 'Samsung Galaxy Store',
      text: 'Your order was shipped...',
      date: '17.01.2024',
      unread: true,
    },
    {
      id: 2,
      store: 'Electronics Store',
      text: 'Your order was shipped...',
      date: '18.01.2024',
      unread: true,
    },
    {
      id: 3,
      store: 'Electronics Store',
      text: 'Your order was in processing...',
      date: '19.01.2024',
      unread: false,
    },
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleMarkRead = (id) => {
    setMessages(messages.map(msg => msg.id === id ? { ...msg, unread: false } : msg));
  };

  const handleDelete = (id) => {
    setMessages(messages.filter(msg => msg.id !== id));
  };

  const filteredMessages = messages.filter(message => 
    message.store.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="messages-container">
      <h1 className="your-messages-title">Your Messages</h1>
      <div className="message-menu">
        <button 
          className={`message-button ${activeTab === 'allMessages' ? 'active' : ''}`} 
          onClick={() => handleTabChange('allMessages')}
        >
          All Messages
        </button>
        <button 
          className={`message-button ${activeTab === 'buyerMessages' ? 'active' : ''}`} 
          onClick={() => handleTabChange('buyerMessages')}
        >
          Buyer/Seller Messages
        </button>
      </div>

      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search" 
          className="search-input" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <img src={searchIcon} alt="Search" className="search-icon" />
      </div>

      <div className="dropdown-container">
        <select className="dropdown-select">
          <option value="all">For all time</option>
        </select>
        <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon" />
      </div>

      <hr className="orange-line" />

      <div className="message-list">
        {filteredMessages.map(message => (
          <div key={message.id} className="message-item">
            <div 
              className={`message-circle ${message.unread ? 'unread' : 'read'}`}
              onClick={() => handleMarkRead(message.id)}
            ></div>
            <div className="message-content">
              <strong>{message.store}</strong>
              <p>{message.text}</p>
              <span>{message.date}</span>
            </div>
            <button className="delete-button" onClick={() => handleDelete(message.id)}>
              🗑️
            </button>
          </div>
        ))}
      </div>

      <div className="send-message-container">
        <button className="send-message-button">Send Message</button>
      </div>
    </div>
  );
};

export default Messages;