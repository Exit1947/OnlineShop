import React, { useState } from 'react';
import './cardpage.css';
import laptopImage from './../../img/iphone-13-pro-azul-sierra-real.png 1.png';
import mouseImage from './../../img/Rectangle 24021 (1).png';
import chargerImage from './../../img/Rectangle 239224.png';
import precisionMouseImage from './../../img/Rectangle 23922 (12).png';
import acerNitroImage from './../../img/Rectangle 23922 (13).png';
import acerAspireImage from './../../img/Rectangle 23922 (14).png';
import groceryStoreImage from './../../img/Rectangle 23922 (15).png';
import sweaterImage from './../../img/Rectangle 23922 (16).png';
import iphoneImage from './../../img/Rectangle 23922 (17).png';
import asusLaptopImage from './../../img/Rectangle 23922 (18).png';
import duckSweaterImage from './../../img/Rectangle 23922 (19).png';
import Dropdown from './../dropmenu/Dropdown.tsx';
import Aftermenu from './../aftermenu/Aftermenu.tsx';
import LanguageDropdown from './../languagedrop/LanguageDropdown.tsx';
import CurrencyDropdown from './../currencydropdown/CurrencyDropdown.tsx';
import Header from './../header/Header.tsx'; 
import Footer from './../footer/Footer.tsx';




const CartPage = () => {
    const [quantity, setQuantity] = useState(1);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [isChecked, setIsChecked] = useState(true);
    const [isDeleted, setIsDeleted] = useState(false);
    const [isSaveLaterActive, setIsSaveLaterActive] = useState(true);
    const [isBuyAgainActive, setIsBuyAgainActive] = useState(false);
    const [likedItems, setLikedItems] = useState({});

    const pricePerItem = 1449.99;
    const totalPrice = (pricePerItem * quantity).toFixed(2);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleDelete = () => {
        setShowDeleteConfirmation(true);
    };

    const confirmDelete = (confirm) => {
        if (confirm) {
            setIsDeleted(true);
        }
        setShowDeleteConfirmation(false);
    };

    const toggleCheck = () => {
        setIsChecked(!isChecked);
    };

    const toggleSaveLater = () => {
        setIsSaveLaterActive(!isSaveLaterActive);
    };

    const toggleBuyAgain = () => {
        setIsBuyAgainActive(!isBuyAgainActive);
    };

    const toggleLike = (item) => {
        setLikedItems((prev) => ({
            ...prev,
            [item]: !prev[item]
        }));
    };

    return (
        <>
        <Header /> 
        <Aftermenu/>
            <Dropdown/>
            <LanguageDropdown/>
            <CurrencyDropdown/>
        <div className="cart-page">
            <h2>Your Card</h2>
            <hr className="yellow-line" />

            {!isDeleted && (
                <div className="cart-item">
                    <div className="item-info">
                        <div className={`checkbox-circle ${isChecked ? 'checked' : ''}`} onClick={toggleCheck}>
                            {isChecked && <span className="checkmark">&#10003;</span>}
                        </div>
                        <img src={laptopImage} alt="Laptop" className="item-image" />
                        <div className="item-details">
                            <h3>Laptop Galaxy Book 3 Pro, 14”</h3>
                            <p>Storage: 512 Gb</p>
                            <p>Color: Sierra Blue</p>
                            <p className="in-stock">In Stock</p>
                            <div className="quantity-controls">
                                <button onClick={handleDecrease}>-</button>
                                <span>{quantity}</span>
                                <button onClick={handleIncrease}>+</button>
                                <span>Save for later</span>
                                <span>Compare with similar items</span>
                                <span>Delivery</span>
                            </div>
                        </div>
                        <button className="delete-icon" onClick={handleDelete}>🗑️</button>
                    </div>
                    <hr className="gray-line" />
                </div>
            )}

            {!isDeleted && (
                <div className="price-info">
                    <p className="total-price">Total Price ({quantity} item{quantity > 1 ? 's' : ''}): ${totalPrice}</p>
                    <button className="buy-now">Buy Now</button>
                </div>
            )}

            {showDeleteConfirmation && (
                <div className="delete-confirmation">
                    <p>Are you sure you want to delete this item?</p>
                    <button onClick={() => confirmDelete(true)}>Yes</button>
                    <button onClick={() => confirmDelete(false)}>No</button>
                </div>
            )}

            <div className="your-items">
                <h2>Your Items</h2>
                <hr className="yellow-line" />
                <div className="item-actions">
                    <button
                        className={`save-later-btn ${isSaveLaterActive ? 'active' : ''}`}
                        onClick={toggleSaveLater}
                    >
                        No items saved for later
                    </button>
                    <button
                        className={`buy-again-btn ${isBuyAgainActive ? 'active' : ''}`}
                        onClick={toggleBuyAgain}
                    >
                        Buy it again
                    </button>
                </div>
                <hr className="gray-line" />
            </div>

            <div className="recommended-section">
                <h2><span className="orange-bar"></span>Recommended based on your shopping trends</h2>
                <div className="product-grid">
                    {[{
                        img: mouseImage,
                        name: "SVEN RX-200 USB Mouse",
                        price: "5,99 $",
                        rating: 4.5
                    }, {
                        img: chargerImage,
                        name: "Charger Fit for Samsung Galaxy Book 3 Pro",
                        price: "9,99 $",
                        rating: 4.6
                    }, {
                        img: precisionMouseImage,
                        name: "Precision Gaming Mouse",
                        price: "9,99 $",
                        rating: 4.6
                    }, {
                        img: acerNitroImage,
                        name: "Acer Nitro Gaming Laptop",
                        price: "1293,99 $",
                        rating: 4.2
                    }, {
                        img: acerAspireImage,
                        name: "Acer Aspire Laptop",
                        price: "844,99 $",
                        rating: 4.6
                    }].map((product, index) => (
                        <div className="product-item" key={index}>
                            <img src={product.img} alt={product.name} className="product-image" />
                            <h3>{product.name}</h3>
                            <span className={`heart-icon ${likedItems[index] ? 'active' : ''}`} onClick={() => toggleLike(index)}>&#9829;</span>
                            <p>{product.price}</p>
                            <p className="product-rating">⭐ {product.rating}</p>
                            <button className="buy-now-btn">Buy Now</button>
                        </div>
                    ))}
                </div>
                <button className="show-more">Show more</button>
            </div>

            <div className="browsing-history-section">
                <h2><span className="orange-bar"></span>Your Browsing History</h2>
                <div className="product-grid">
                    {[{
                        img: groceryStoreImage,
                        name: "The Heaven & Earth Grocery Store",
                        price: "9,99 $",
                        rating: 4.7
                    }, {
                        img: sweaterImage,
                        name: "Woolen Sweater",
                        price: "90,99 $",
                        rating: 4.4
                    }, {
                        img: iphoneImage,
                        name: "Apple iPhone 13 Pro",
                        price: "1449,99 $",
                        rating: 4.6
                    }, {
                        img: asusLaptopImage,
                        name: "ASUS Laptop",
                        price: "712,99 $",
                        rating: 4.2
                    }, {
                        img: duckSweaterImage,
                        name: "Duck Pattern Sweater",
                        price: "4,99 $",
                        rating: 4.6
                    }].map((product, index) => (
                        <div className="product-item" key={index}>
                            <img src={product.img} alt={product.name} className="product-image" />
                            <h3>{product.name}</h3>
                            <span className={`heart-icon ${likedItems[index + 5] ? 'active' : ''}`} onClick={() => toggleLike(index + 5)}>&#9829;</span>
                            <p>{product.price}</p>
                            <p className="product-rating">⭐ {product.rating}</p>
                            <button className="buy-now-btn">Buy Now</button>
                        </div>
                    ))}
                </div>
                <button className="show-more">Show more</button>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default CartPage;