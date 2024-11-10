import React from 'react';
import './footer.css';
import logo from './../../img/Group 1474.png'; 
import visaIcon from './../../img/logos_visa.png'; 
import mastercardIcon from './../../img/logos_mastercard.png';
import paypalIcon from './../../img/ic_baseline-paypal (1).png';
import facebookIcon from './../../img/ic_baseline-facebook.png'; 
import instagramIcon from './../../img/ri_instagram-fill.png';
import twitterIcon from './../../img/devicon_twitter.png';
import youtubeIcon from './../../img/mdi_youtube.png';
import emailIcon from './../../img/ic_baseline-tiktok.png';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <img src={logo} alt="Omnify" className="footer-logo" />
            <p>"Where Shopping Dreams come true"</p>
            <div className="footer-contact">
              <p>📞 Hotline 24/7</p>
              <p>+380 (68) 767 71 95</p>
              <p>🏠 959 Homestead St. Eastlake, NYC</p>
              <p>📧 support@omnify.com</p>
            </div>
          </div>
          <div className="footer-section">
            <h3>Get to Know Us</h3>
            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>About Omnify</li>
              <li>Investor Relations</li>
              <li>Omnify Devices</li>
              <li>Omnify Science</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Make Money with Us</h3>
            <ul>
              <li>Sell product on Omnify</li>
              <li>Sell on Omnify Business</li>
              <li>Sell apps on Omnify</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Product</li>
              <li>Self-Publish with Us</li>
              <li>Host an Omnify Hub</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Omnify Payment Product</h3>
            <ul>
              <li>Omnify Business Card</li>
              <li>Shop with points</li>
              <li>Reload Your Balance</li>
              <li>Omnify Currency Converter</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Let Us Help You</h3>
            <ul>
              <li>Your Account</li>
              <li>Your Order</li>
              <li>Shipping Rates & Policies</li>
              <li>Return & Replacements</li>
              <li>Manage Your Content and Devices</li>
              <li>Omnify Assistant</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>2023 Omnify All Rights Reserved</p>
          <div className="footer-icons">
            <img src={visaIcon} alt="Visa" />
            <img src={mastercardIcon} alt="Mastercard" />
            <img src={paypalIcon} alt="Paypal" />
          </div>
          <div className="footer-contacts">
            <p>Our Contacts:</p>
            <img src={facebookIcon} alt="Facebook" />
            <img src={instagramIcon} alt="Instagram" />
            <img src={twitterIcon} alt="Twitter" />
            <img src={youtubeIcon} alt="YouTube" />
            <img src={emailIcon} alt="Email" />
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
