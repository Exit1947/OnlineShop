import React, { useState } from 'react';
import './adminpages.css'
import UserProfiles from './../adminpage/UserProfiles.jsx';
import Orders from './../adminpage/Orders.jsx';
import Messages from './../adminpage/Messages.jsx';
import Payments from './../adminpage/Payments.jsx';
import Security from './../adminpage/Security.jsx';
import History from './../adminpage/History.jsx';
import Subscribes from './../adminpage/Subscribes.jsx';
import CustomerService from './../adminpage/CustomerService.jsx';
import userAvatar from './../../img/Ellipse 255.png'
import Header from './../header/Header.tsx';
import Dropdown from './../dropmenu/Dropdown.tsx';
import Aftermenu from './../aftermenu/Aftermenu.tsx';
import LanguageDropdown from './../languagedrop/LanguageDropdown.tsx';
import CurrencyDropdown from './../currencydropdown/CurrencyDropdown.tsx';
import Footer from './../footer/Footer.tsx';


const AdminPage = () => {
    const [activeComponent, setActiveComponent] = useState('Profile');

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
                    <h3 className="profile-name">Vivian Weaver</h3>
                    <p className="profile-email">cookie98@gmail.com</p>
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