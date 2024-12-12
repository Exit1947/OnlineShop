import React, { useState, useEffect, setData } from 'react';
import './adminpages.css'
import UserProfiles from './UserProfiles.jsx';
import Orders from './Orders.jsx';
import Messages from './Messages.jsx';
import Payments from './Payments.jsx';
import Security from './Security.jsx';
import History from './History.jsx';
import Subscribes from './Subscribes.jsx';
import CustomerService from './CustomerService.jsx';
import userAvatar from './../../img/Ellipse 255.png'
import Header from '../header/Header.tsx';
import Dropdown from '../dropmenu/Dropdown.tsx';
import Aftermenu from '../aftermenu/Aftermenu.tsx';
import LanguageDropdown from '../languagedrop/LanguageDropdown.tsx';
import CurrencyDropdown from '../currencydropdown/CurrencyDropdown.tsx';
import Footer from '../footer/Footer.tsx';
import axios from 'axios'


const AdminPage = () => {
    const [activeComponent, setActiveComponent] = useState('Profile');
    const [data, setData]= useState([]);  
    useEffect(()=> {
        axios.get("http://localhost:8080/api/user/end-user/me",{
                headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxZTMxMTZlYS1kYjUzLTRmOGYtODQzMi0xODZmYjczYzgyZmUiLCJlbWFpbCI6ImV4YW1wbGVAZXhhbXBsZS5jb20iLCJyb2xlIjoiRU5EX1VTRVIiLCJhdXRob3JpdGllcyI6WyJST0xFX0VORF9VU0VSIiwiQlVZX1BST0RVQ1QiXSwiaWF0IjoxNzMzNjgxMDUzLCJleHAiOjE3MzQxMTMwNTMsImlzcyI6IlNFUlZJQ0VfTkFNRSJ9.IjeZxZzKiEkPb1ZdVJq5Ul1ezIRmQnlSgfTRQP1Ohmg"
                }
              }
        )
        .then(response=> setData(response.data))
        .catch(error => console.log(error));
       }, [])

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Orders':
                return <Orders />;
            case 'Messages':
                return <Messages />;
            case 'Payments':
                return <Payments />;
            case 'Security':
                return <Security />;
            case 'History':
                return <History />;
            case 'Subscribes':
                return <Subscribes />;
            case 'CustomerService':
                return <CustomerService />;
            default:
                return <UserProfiles />;
        }
    };

    return (
        <>
        <Header />  
            
        <Aftermenu/>
        <Dropdown/>
        <LanguageDropdown/>
        <CurrencyDropdown/>
        <div className="admin-page">
            <div className="left-panel">
                <div className="profile-box">
                    <img className="profile-img" src={userAvatar} alt="User Avatar" />
                    <h3 className="profile-name">{data.firstName}</h3>
                    <p className="profile-email">{data.email}</p>
                </div>
                <div className="navigation-panel">
                    <ul>
                        <li onClick={() => setActiveComponent('Profile')} className={activeComponent === 'Profile' ? 'active' : ''}>
                            User Profile
                        </li>
                        <li onClick={() => setActiveComponent('Orders')} className={activeComponent === 'Orders' ? 'active' : ''}>
                            Your Orders
                        </li>
                        <li onClick={() => setActiveComponent('Messages')} className={activeComponent === 'Messages' ? 'active' : ''}>
                            Your Messages
                        </li>
                        <li onClick={() => setActiveComponent('Payments')} className={activeComponent === 'Payments' ? 'active' : ''}>
                            Your Payments
                        </li>
                        <li onClick={() => setActiveComponent('Security')} className={activeComponent === 'Security' ? 'active' : ''}>
                            Login & Security
                        </li>
                        <li onClick={() => setActiveComponent('History')} className={activeComponent === 'History' ? 'active' : ''}>
                            Orders History
                        </li>
                        <li onClick={() => setActiveComponent('Subscribes')} className={activeComponent === 'Subscribes' ? 'active' : ''}>
                            Your Subscribes
                        </li>
                        <li onClick={() => setActiveComponent('CustomerService')} className={activeComponent === 'CustomerService' ? 'active' : ''}>
                            Customer Service
                        </li>
                    </ul>
                </div>
            </div>

            <div className="right-panel">
                {renderComponent()}
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default AdminPage;