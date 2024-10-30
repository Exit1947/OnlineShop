import './productpagestyle.css';
import React from 'react';
import starEmptyUno from '../../img/star-empty.png';
import starOrangeUno from '../../img/star-full-orange.png';
import PictureProduct from '../../img/LepTop.png' ;
import HeartCard from '../../img/heart-orange-border.png';
import HeartOrange from '../../img/full-heart-orange.png';
import { useState, useEffect} from "react";

const Card =() => {

// Add color to heart 
   
const [colorHeart, setColorHeart] = useState(HeartCard);

let toggle= true;


const changeColor =()=> {
   toggle=!toggle;
   toggle? setColorHeart (HeartCard) : setColorHeart (HeartOrange);
  
   
}

// add color star
const [colorStar, setColorStar] = useState(starEmptyUno);   

  let id = null;

  const changeColorStar =()=> {
    toggle=!toggle;
    
    toggle? setColorStar (starEmptyUno) : setColorStar (starOrangeUno);    
    
} 
    return (
<div className='card'>
<div className='top-card'>
<div className='title-card'> Asus TUF Gaming A15 (2023)</div>
<div className='heart-card'> <img  src= {colorHeart}  onClick={changeColor} alt=''  /> </div>
</div>

<div className='image-card'> 
    <img src={PictureProduct} alt='' className='image-product'/>
</div>

<div className='point-cart'>
    <div className='point'></div>
    <div className='point'></div>
    <div className='point'></div>
</div>

<div className='bottom-cart'>
    <div className='price-card'>1241,99 $</div>
    <div className='star-card'> <img src={colorStar} onClick={changeColorStar} alt=''/></div>
    <div className='rating-card'> 4,7</div>
</div>

<div className='real-price'>1462.99$</div>
    

</div>
)

}

export default Card;