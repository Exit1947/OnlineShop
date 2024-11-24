import React, { useState } from 'react';
import userAvatar from './../../img/Ellipse 255.png';




const UserProfiles = () => {
  const [pinVisible, setPinVisible] = useState(false);

  
  return (
    <div className="profile-details">
      <div className="profile-column">
        <div className="profile-section">
          <h2>Account Holder</h2>
          <label>Full name</label>
          <input type="text" value="Vivian Weaver" />

          <label>Email</label>
          <input type="email" value="cookie98@gmail.com" />

          <label>Phone number</label>
          <input type="tel" value="+1 (101) 305-6520" />

          <label>Date of Birth</label>
          <div className="dob-fields">
            <select>
              <option value="04">04</option>
            </select>
            <select>
              <option value="02">02</option>
            </select>
            <select>
              <option value="1997">1997</option>
            </select>
          </div>
        </div>

        <div className="profile-section">
          <h2>Residential Address</h2>
          <label>Region</label>
          <input type="text" value="California" />

          <label>Settlement</label>
          <input type="text" value="San Francisco" />

          <label>Address</label>
          <div className="address-fields">
            <select>
              <option value="Howard">Howard</option>
            </select>
            <select>
              <option value="12">12</option>
            </select>
            <select>
              <option value="94102">94102</option>
            </select>
          </div>
        </div>
      </div>

      <div className="right-column">
      <div className="profile-section">
        <h2>Edit Profile Picture</h2>
        <img className="profile-img-edit" src={userAvatar} alt="Profile" />
        <div className="upload-container">
  <div className="upload-blocks">
  <div className="upload-info">
    <p>Upload New Image<br />Max file size - 10 mb</p>
  </div>
    <select className="upload-dropdown">
      <option>Upload</option>
    </select>
    <select className="upload-dropdown">
      <option>Remove image</option>
    </select>
  </div>
 
</div>

        </div>
        
        <div className="profile-details">
      <div className="right-column">
        <div className="profile-section security-section">
          <h2>Security</h2>
          <label className='pinclass'>PIN</label>
          <input
            type={pinVisible ? 'text' : 'password'}
            value="12345678"
            onFocus={() => setPinVisible(true)}
            onBlur={() => setPinVisible(false)}
          />
          <button className="save-edit-btn">Save Edit</button>
        </div>
      </div>
    </div>

</div>
    </div>
  );
};

export default UserProfiles;