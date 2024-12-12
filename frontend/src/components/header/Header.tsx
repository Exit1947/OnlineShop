import { Link, useNavigate } from 'react-router-dom';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import styles from './header.css'
import logoImg from './../../img/Group 1474.png'
import logoImgs from './../../img/Frame 427319424.png'
import histImg from './../../img/Frame 427319439.png'
import loghartImg from './../../img/Frame 427319440.png'
import logologImg from './../../img/iconamoon_profile.png'
import byelogImg from './../../img/shopping_cart.png'
import searchIcon from './../../img/Vector.png'
import React from 'react'


function Header (){
    const navigate = useNavigate();


    return (
      <header className="header">
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
    <div className="header_icon">
        <img src={logologImg} alt="Profile" onClick={() => navigate("/auth/login")} />
    </div>
    <div className="text_signin" onClick={() => navigate("/auth/login")}>
        Hello, sign in
    </div>
    <div className="header_icon">
        <img src={byelogImg} alt="Cart" onClick={() => navigate("/cardpage/:id")} />
    </div>
    <div className={styles["text_carts"]}>
        0$
    </div>
</div>


</header>

  );
}
export default Header;
