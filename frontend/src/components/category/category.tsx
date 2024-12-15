import React from 'react';
import { useState, useEffect, useRef} from "react";
import { useNavigate } from 'react-router-dom';
import './category.css';
import Playstation from '../../img/Rectangle 23944 (1).png';
import Phone from '../../img/phone.png';
import xbox from '../../img/xBox.png';
import laptop from '../../img/laptop.png'
import Keyboards from '../../img/Keyboards.png'
import Chaires from '../../img/chaires.png'
import  Headphones from '../../img/headphones.png'
import  GamingMice from '../../img/Mice.png'
import  Glasses from '../../img/glssses.png'
import  Monitors from '../../img/monitors.png'
import  Routers from '../../img/routers.png'
import  Videogames from '../../img/videogames.png'
import  Acoustic from '../../img/Acoustic.png'
import  FlashDrive from '../../img/FlashDrive.png'
import  stands from '../../img/stands.png'
import  TVs from '../../img/TVs.png'
import Footer from   "../footer/Footer.tsx";
import Header from "../header/Header.tsx";
import Dropdown from './../dropmenu/Dropdown.tsx';
import Aftermenu from './../aftermenu/Aftermenu.tsx';
import LanguageDropdown from './../languagedrop/LanguageDropdown.tsx';
import CurrencyDropdown from './../currencydropdown/CurrencyDropdown.tsx';
import PosterSlider from "../posterslider/PosterSlider.tsx";


const Category =()=> { 

  return (

    <>
            <Header />            
            <Aftermenu/>
            <Dropdown/>
            <LanguageDropdown/>
            <CurrencyDropdown/>
            <PosterSlider/>

    <div className='category-container'>
        <div className='category-first-section'>
            <div className='playstation'>
            <div className='name-category'>Playstation</div>
            <img src={Playstation} alt='...' className='img-category'/>
            </div>
            <div className='xbox'>
            <div className='name-category'>XBOX</div>
            <img src={xbox} alt='...' className='img-category'/>
            </div>
            <div className='Laptop'>
            <div className='name-category'>Laptop</div>
            <img src={laptop} alt='...' className='img-category'/>
            </div>
            <div className='Phone'>
            <div className='name-category'>Phone</div>
            <img src={Phone} alt='...' className='img-category'/>
            </div>
        </div>
        <div className='category-first-section'>
            <div className='playstation'>
            <div className='name-category'>Keyboards</div>
            <img src={Keyboards} alt='...' className='img-category'/>
            </div>
            <div className='xbox'>
            {/* <div className='name-category'>Headphones</div> */}
            <img src={Headphones} alt='...' className='img-categoryfull'/>
            </div>
            <div className='Laptop'>
            <div className='name-category'>Chairs</div>
            <img src={Chaires} alt='...' className='img-category'/>
            </div>
            <div className='Phone'>
            <div className='name-category'>Gaming mise</div>
            <img src={GamingMice} alt='...' className='img-category'/>
            </div>
        </div>
        <div className='category-first-section'>
        <div className='playstation'>
            {/* <div className='name-category'>Monitors</div> */}
            <img src={Monitors} alt='...' className='img-categoryfull'/>
            </div>
            <div className='xbox'>
            {/* <div className='name-category'>Routers</div> */}
            <img src={Routers} alt='...' className='img-categoryfull'/>
            </div>
            <div className='Laptop'>
            <div className='name-category'>VR Glasses</div>
            <img src={Glasses} alt='...' className='img-category'/>
            </div>
            <div className='Phone'>
            <div className='name-category'>VideoGames</div>
            <img src={Videogames} alt='...' className='img-category'/>
            </div>    
        </div>
        <div className='category-first-section'>
        <div className='playstation'>
            {/* <div className='name-category'>TV`s</div> */}
            <img src={TVs} alt='...' className='img-categoryfull'/>
            </div>
            <div className='xbox'>
            {/* <div className='name-category'>Acoustic</div> */}
            <img src={Acoustic} alt='...' className='img-categoryfull'/>
            </div>
            <div className='Laptop'>
            {/* <div className='name-category'>Flash drive</div> */}
            <img src={FlashDrive} alt='...' className='img-categoryfull'/>
            </div>
            <div className='Phone'>
            {/* <div className='name-category'>Stands</div> */}
            <img src={stands} alt='...' className='img-categoryfull'/>
            </div>
        </div>
    </div>
    <Footer/>
    </>

  )
}

export default Category;

