import React, { useState,  useEffect } from 'react';
import userAvatar from './../../img/Ellipse 255.png';
import axios from 'axios'


const UserProfiles = () => {
  const [pinVisible, setPinVisible] = useState(false);
  const [image1, setImage] = useState(userAvatar); // Поточне зображення
  const [selectedFile, setSelectedFile] = useState(null); // Вибраний файл
  const [data, setData] = useState([]); // Дані користувача

  

       useEffect(()=> {
        axios.get("http://localhost:8080/api/user/end-user/me",{
                headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxZTMxMTZlYS1kYjUzLTRmOGYtODQzMi0xODZmYjczYzgyZmUiLCJlbWFpbCI6ImV4YW1wbGVAZXhhbXBsZS5jb20iLCJyb2xlIjoiRU5EX1VTRVIiLCJhdXRob3JpdGllcyI6WyJST0xFX0VORF9VU0VSIiwiQlVZX1BST0RVQ1QiXSwiaWF0IjoxNzMzNjgxMDUzLCJleHAiOjE3MzQxMTMwNTMsImlzcyI6IlNFUlZJQ0VfTkFNRSJ9.IjeZxZzKiEkPb1ZdVJq5Ul1ezIRmQnlSgfTRQP1Ohmg"
                }
              }
        )
        .then(response=> setData(response.data))
        .catch(error => console.log(error));
       }, [])

        

      // Завантаження зображення
  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("avatar", selectedFile);

    axios
      .post("http://localhost:8080/api/user/avatar/me", formData, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxZTMxMTZlYS1kYjUzLTRmOGYtODQzMi0xODZmYjczYzgyZmUiLCJlbWFpbCI6ImV4YW1wbGVAZXhhbXBsZS5jb20iLCJyb2xlIjoiRU5EX1VTRVIiLCJhdXRob3JpdGllcyI6WyJST0xFX0VORF9VU0VSIiwiQlVZX1BST0RVQ1QiXSwiaWF0IjoxNzMzNjgxMDUzLCJleHAiOjE3MzQxMTMwNTMsImlzcyI6IlNFUlZJQ0VfTkFNRSJ9.IjeZxZzKiEkPb1ZdVJq5Ul1ezIRmQnlSgfTRQP1Ohmg",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        alert("Image uploaded successfully!");
        
        const imageUrl = URL.createObjectURL(selectedFile);
        setImage(imageUrl); 
      })
      .catch((error) => console.log("Upload error:", error));
  };

  
  const handleRemove = () => {
    axios
      .delete("http://localhost:8080/api/user/avatar/me", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxZTMxMTZlYS1kYjUzLTRmOGYtODQzMi0xODZmYjczYzgyZmUiLCJlbWFpbCI6ImV4YW1wbGVAZXhhbXBsZS5jb20iLCJyb2xlIjoiRU5EX1VTRVIiLCJhdXRob3JpdGllcyI6WyJST0xFX0VORF9VU0VSIiwiQlVZX1BST0RVQ1QiXSwiaWF0IjoxNzMzNjgxMDUzLCJleHAiOjE3MzQxMTMwNTMsImlzcyI6IlNFUlZJQ0VfTkFNRSJ9.IjeZxZzKiEkPb1ZdVJq5Ul1ezIRmQnlSgfTRQP1Ohmg",
        },
      })
      .then(() => {
        alert("Image removed successfully!");
        setImage(userAvatar); 
      })
      .catch((error) => console.log("Remove error:", error));
  }; 
  return (
    <div className="profile-details">
      <div className="profile-column">
        <div className="profile-section">
          <h2>Account Holder</h2>
          <label>Full name</label>
          <input type="text" value={data.firstName}/>

          <label>Email</label>
          <input type="email" value={data.email} />

          <label>Phone number</label>
          <input type="tel" value={data.phoneNumber} />

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
  <button onClick={handleUpload}>Upload</button>
  <button onClick={handleRemove}>Remove Image</button>
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