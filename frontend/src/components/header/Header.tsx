import  './header.module.css'
import logoImg from './../../img/Group 1474.png'
import logoImgs from './../../img/Frame 427319424.png'
import histImg from './../../img/Frame 427319439.png'
import loghartImg from './../../img/Frame 427319440.png'
import logologImg from './../../img/iconamoon_profile.png'
import byelogImg from './../../img/shopping_cart.png'
import searchIcon from './../../img/Vector.png'
import React from 'react'


function Header (){
    return (
      <header className="header">
          <h1>Test Header</h1> {/* Простий текст для тесту */}
    <div className="header_left">
        <img src={logoImg} alt="Logo" className="header_logo" />
        <div className="header_catalogue">
            <img src={logoImgs} alt="Catalogue Icon" className="header_catalogue_icon" />

        </div>
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
    <div className="header_icon icon_favorites">
        <img src={loghartImg} alt="Favorites" />
    </div>
    <div className="header_icon icon_profile">
        <img src={logologImg} alt="Profile" />
    </div>
    <div className="text_signin">
        Hello, sign in
    </div>
    <div className="header_icon icon_cart">
        <img src={byelogImg} alt="Cart" />
    </div>
    <div className="text_cart">
        0$
    </div>
</div>


</header>

  );
}
export default Header;
