import React, { useState } from 'react';
import './singlerowproductlist.css';
import image1 from './../../img/Rectangle 23922 (8).png'; 
import image2 from './../../img/Rectangle 23922 (9).png';
import image3 from './../../img/Rectangle 23922 (10).png';
import image4 from './../../img/Rectangle 23922 (11).png';

const products = [
    { src: image1, title: 'Gray T-Shirt', price: '74,99 $', oldPrice: '148,99 $', rating: 4.5 },
    { src: image2, title: 'Dumbbell 12kg', price: '23,99 $', oldPrice: '46,99 $', rating: 4 },
    { src: image3, title: 'Golden Bracelet', price: '399,99 $', oldPrice: '1389,99 $', rating: 3.5 },
    { src: image4, title: 'Christmas tree', price: '40,99 $', oldPrice: '170,99 $', rating: 5 }
  ];
  
  const SingleRowProductList = () => {
    const [liked, setLiked] = useState(Array(products.length).fill(false));
  
    const toggleLike = (index) => {
      const newLiked = [...liked];
      newLiked[index] = !newLiked[index];
      setLiked(newLiked);
    };
  
    return (
      <div className="single-row-product-list-wrapper">
        <div className="single-row-product-list-header">
          <div className="single-row-left">
            <h2>Best Seller</h2>
            <div className="single-row-product-categories">
              <span>All</span>
              <span>Fashion</span>
              <span>Beauty & Care</span>
              <span>Sport & Outdoors</span>
              <span>Books & Comics</span>
              <span>Music, CDs, Vinyl</span>
              <span>Jewelry</span>
            </div>
          </div>
          <div className="single-row-arrows">
            <button className="single-row-arrow single-row-left-arrow">&lt;</button>
            <button className="single-row-arrow single-row-right-arrow">&gt;</button>
          </div>
        </div>
        <div className="single-row-product-list-container">
          {products.map((product, index) => (
            <div key={index} className="single-row-product-item">
              <img src={product.src} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="single-row-price">{product.price}</p>
              <p className="single-row-old-price">{product.oldPrice}</p>
              <div className="single-row-rating">
                <span>⭐</span>
                <span>{product.rating}</span>
              </div>
              <button className="single-row-buy-now">Buy Now</button>
              <div 
                className={`single-row-heart ${liked[index] ? 'liked' : ''}`}
                onClick={() => toggleLike(index)}
              >❤</div>
            </div>
          ))}
        </div>
        <div className="single-row-product-list-footer">
          <button className="single-row-view-more">View More</button>
        </div>
      </div>
    );
  };
  
  export default SingleRowProductList;