import './header.css'
import logoImg from './../../img/Group 1474.png'
import logoImgs from './../../img/Frame 427319424.png'
import histImg from './../../img/Frame 427319439.png'
import loghartImg from './../../img/Frame 427319440.png'
import logologImg from './../../img/iconamoon_profile.png'
import byelogImg from './../../img/shopping_cart.png'
import searchIcon from './../../img/Vector.png'
import React from 'react';
import { useNavigate } from 'react-router-dom';



function Header (){

    const navigate =useNavigate();
    const navigate1 =useNavigate();

   function navRegistration (event){
    event.preventDefault();
    navigate('/auth/form', { replace: true });
   }

   function navLogin (event){
    event.preventDefault();
    navigate('/auth/loginpage', { replace: true });
   }


   function navCategory (event){
    event.preventDefault();
    navigate('/auth/subcategories', { replace: true });
   } 


  
   function navCartPage (event){
    event.preventDefault();
    navigate('/cardpage/:id', { replace: true });
   } 


   function navHomePage (event){
    event.preventDefault();
    navigate('/', { replace: true });
   } 

    return (
      <header className="header">
          <h1>Test Header</h1> {/* Простий текст для тесту */}
    <div className="header_left" onClick={navHomePage}>
        <img src={logoImg} alt="Logo" className="header_logo" />
        </div>
        <div className="header_catalogue" onClick={navCategory}>
            <img src={logoImgs} alt="Catalogue Icon"  className="header_catalogue_icon" />

        
    </div>

    <div className="header_search">
        <select className="search_category">
            <option value="all">All</option>
        </select>
        <input type="text" placeholder="Search" className="search_input" />
        <img src={searchIcon} alt="Search" className="search_icon" />
    </div>

    <div className="header_right">
    <div className="header_icon icon_history">
        <img src={histImg} alt="History" />
    </div>
    <div className="header_icon icon_favorites" >
        <img src={loghartImg} alt="Favorites" />
    </div>
    <div className="header_icon icon_profile">
    </div>
        <img src={logologImg} alt="Profile"  onClick={navRegistration} />
        <div className="text_signin" onClick={navLogin}>
        Hello, sign in
    </div>
    <div className="header_icon icon_cart" onClick={navCartPage}>
        <img src={byelogImg} alt="Cart"  />
    </div>
    <div className="text_cart">
        0$
    </div>
</div>


</header>

  );
}
export default Header;
