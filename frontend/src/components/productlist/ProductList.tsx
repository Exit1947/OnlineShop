import React, { useState } from 'react';
import './productlist.css';
import { useEffect, useRef} from "react";
import axios from "axios";
import {Link, useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import image1 from './../../img/id1.png'; 
import image2 from './../../img/id2.png';
import image3 from './../../img/id3.png';
import image4 from './../../img/id4.png';
import image5 from './../../img/id5.png';
import image6 from './../../img/id6.png';
import image7 from './../../img/id7.png';
import image8 from './../../img/id8.png';
import data from './data.json';
import Product from './product.tsx';

// const products = [
//   { id:1, src: image1, title: 'MacBook Air Pro 13-inch', price: '1,299.99 $', oldPrice: '1,499.99 $', rating: 4.5 , url: 'auth/product/1'},
//   { id:2, src: image2, title: 'Samsung Galaxy s23 Ultra (Black)', price: '1,100.00 $', oldPrice: '1,300.00 $', rating: 5, url: 'auth/product/2'},
//   { id:3, src: image3, title: 'Apple Watch Series 8 (Sport Band)', price: '399.99 $', oldPrice: '499.99 $', rating: 4, url: 'auth/product/3' },
//   { id:4, src: image4, title: 'JBL Headphones Wireless E45', price: '59.99 $', oldPrice: '99.99 $', rating: 4.5, url: 'auth/product/4' },
//   { id:5, src: image5, title: 'Multi-function printer Epson L380', price: '399.99 $', oldPrice: '499.99 $', rating: 2.5, url: 'auth/product/5' },
//   { id:6, src: image6, title: 'PlayStation 5 (Blu-ray) 825 gb', price: '449.99 $', oldPrice: '499.99 $', rating: 5, url: 'auth/product/6'},
//   { id:7, src: image7, title: 'Xbox Wireless Controller', price: '79.99 $', oldPrice: '89.99 $', rating: 3.5 , url: 'auth/product/7'},
//   { id:8, src: image8, title: 'JBL Boombox 2 (Black)', price: '499.99 $', oldPrice: '599.99 $', rating: 4.5 , url: 'auth/product/8'}
// ];

const ProductList = (props) => {
  
    const products = [
        { id:1, src: image1, title: 'MacBook Air Pro 13-inch', price: '1,299.99 $', oldPrice: '1,499.99 $', rating: 4.5 , url: 'auth/product/1'},
        { id:2, src: image2, title: 'Samsung Galaxy s23 Ultra (Black)', price: '1,100.00 $', oldPrice: '1,300.00 $', rating: 5, url: 'auth/product/2'},
        { id:3, src: image3, title: 'Apple Watch Series 8 (Sport Band)', price: '399.99 $', oldPrice: '499.99 $', rating: 4, url: 'auth/product/3' },
        { id:4, src: image4, title: 'JBL Headphones Wireless E45', price: '59.99 $', oldPrice: '99.99 $', rating: 4.5, url: 'auth/product/4' },
        { id:5, src: image5, title: 'Multi-function printer Epson L380', price: '399.99 $', oldPrice: '499.99 $', rating: 2.5, url: 'auth/product/5' },
        { id:6, src: image6, title: 'PlayStation 5 (Blu-ray) 825 gb', price: '449.99 $', oldPrice: '499.99 $', rating: 5, url: 'auth/product/6'},
        { id:7, src: image7, title: 'Xbox Wireless Controller', price: '79.99 $', oldPrice: '89.99 $', rating: 3.5 , url: 'auth/product/7'},
        { id:8, src: image8, title: 'JBL Boombox 2 (Black)', price: '499.99 $', oldPrice: '599.99 $', rating: 4.5 , url: 'auth/product/8'}
      ];
    // const [data, setData]= useState([])

    // function  getData() {
    // fetch("http://localhost:8080/api/product")
    // .then((response) => {
    //     if (response.ok){
    //         return response.json();
    //     }
    //     throw new Error();
    // })
    // .then ((data) => {
    //     setData(data);
    // })
    //   .catch (error => {
    //     alert ("Error fetch")
    //   })
       
     
     
    //   }
   
      
    //   console.log(data);
     const [data, setData]= useState([])
        useEffect (()=> {
    axios.get('http://localhost:8080/api/product/card/count=8').
    then((response) => setData(response.data)
    )
     
     
      
     
      }, [])

   let n= null;
    const navigate =useNavigate();

   function navProductPage (event){
    event.preventDefault();
    navigate(`product/:id`, { replace: true, state:{data} });
   } 

   

  
    
      

  const [liked, setLiked] = useState(Array(products.length).fill(false));

  const toggleLike = (index) => {
      const newLiked = [...liked];
      newLiked[index] = !newLiked[index];
      setLiked(newLiked);
  };

  return (
      <div className="custom-product-list-wrapper">
          <div className="custom-header-container">
              <div className="custom-header">
                  <h2>Best Seller</h2>
                  <div className="custom-header-categories">
                      <span>All</span>
                      <span>Phones</span>
                      <span>Laptops</span>
                      <span>Headsets</span>
                      <span>Watches</span>
                      <span>Computers</span>
                      <span>Tablets</span>
                      <span>Consoles</span>
                  </div>
              </div>
              <div className="custom-header-arrows">
                  <button className="custom-arrow custom-left-arrow">&lt;</button>
                  <button className="custom-arrow custom-right-arrow">&gt;</button>
              </div>
          </div>
          <div className="custom-product-list-container"  >
              {
              data.map((product, index) => {
              return  (
                  <Link key={index} className="custom-product-item"  to ={`/product/${product.id}`}>
                   
                      <img src={product.thumbnailImage} alt={product.title} />
                      <h3>{product.title}</h3>
                      <p className="custom-price">{product.price}</p>
                      <p className="custom-old-price">{product.oldPrice}</p>
                      <div className="custom-rating">
                          <span>⭐</span>
                          <span>{product.rating}</span>
                      </div>
                     
                      <button className="custom-buy-now">Buy Now</button>
                      <div 
                          className={`custom-heart ${liked[index] ? 'liked' : ''}`}
                          onClick={() => toggleLike(index)}
                      >❤</div>
                  </Link>
              )})}
          </div>
          <div className="custom-product-list-footer">
              <button className="custom-view-more">View More</button>
          </div>
      </div>
  );
};

export default ProductList;

