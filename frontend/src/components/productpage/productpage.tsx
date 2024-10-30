import './productpagestyle.css';
import React from 'react';
import {useRef} from 'react';
import Card from './card.tsx'
import { Rating } from 'react-simple-star-rating';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect} from "react";
import Arrow from '../../img/icons-arrow-left.png';
import IconsFour from '../../img/Frame 427319916.png';
import Business from '../../img/Frame 427319913.png';
import FirstSection from '../../img/left first section.png';
import FirstSectionRight from '../../img/right first section.png';
import SecondsectionLeft from '../../img/left second section .png';
import SecondsectionRight from '../../img/right second section.png';
import  ThirdSectionLeft  from '../../img/left  third section .png';
import ThirdSectionRight from '../../img/right third section.png'  ;
import FourthSection from '../../img/Group 1501.png';
import FifthSection from '../../img/Group 1502.png';
import BlackLogo from '../../img/logo Omnify.png';
import PictureProduct from '../../img/LepTop.png' ;
import starEmpty from '../../img/star-empty.png';
import starOrange from '../../img/star-full-orange.png';
import arrowDown from '../../img/drop-down-arrow.png';
import PhotoUser from '../../img/image 95.png';
import PhotoProduct from '../../img/Frame 427320002.png';
import ThreeDots from '../../img/three-dots.png';
import ArrowBack from '../../img/arrow back.png';
import ThumbUp from '../../img/thumb-up.png';
import ThumbDown from '../../img/thumb-down.png';
import ArrowDown from '../../img/arrow-down.png';
import ArrowLeft from '../../img/arrow-left.png';
import ArrowRight from '../../img/arrow-right.png';
import HeartCard from '../../img/heart-orange-border.png';
import HeartOrange from '../../img/full-heart-orange.png';
import ExtraPhotoLaptop01 from '../../img/main-photo-laptop.png';
import ExtraPhotoLaptop02 from '../../img/photo-laptop1.jpg';
import ExtraPhotoLaptop03 from '../../img/photo-laptop2.png';
import ExtraPhotoLaptop04 from '../../img/photo-laptop3.png';
import ExtraPhotoLaptop05 from '../../img/photo-laptop4.png';
import ExtraPhotoLaptop06 from '../../img/photo-laptop5.png';
import starEmptyUno from '../../img/star-empty.png';
import starOrangeUno from '../../img/star-full-orange.png';
import { toBeDisabled } from '@testing-library/jest-dom/matchers';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ProductPage = () => {
    
    const imgs =[
        {id:0, value:ExtraPhotoLaptop01},
        {id:1, value:ExtraPhotoLaptop02},
        {id:2, value:ExtraPhotoLaptop03},
        {id:3, value:ExtraPhotoLaptop04},
        {id:4, value:ExtraPhotoLaptop05},
        {id:5, value:ExtraPhotoLaptop06},
    ];

  const [sliderData, setSliderData] = useState(imgs[0])
    const HandleClick = (index) =>{
        const slider=imgs[index];
        setSliderData(slider);
    }

//   Slider photo laptop
//   const ImageMain =({arr, image, index}) => {
//     return (
        
//         <div className='img'>
//             {arr.map ((imgsrc,i)=>
//             <img 
//             key={i}
//             height ={150}
//             width={150}
           
//             src={imgsrc}
//             onClick={()=> image(i)}
//             className={index ===i ? 'active' : ''}
//             />
//             )}
//         </div>
//     )
//   }

//   const Slideshow = ( {imgs}) =>{
//     const [index, setIndex] = useState(0);

//     useEffect(()=> {setIndex(0)},[])

//     const next= ()=> {
//         if (index=== imgs.length-1){
//             setIndex(0)
//         } else { setIndex(index+1)}
//     }

//     const prev= ()=> {
//     if (index === 0)
//          { setIndex (imgs.length-1)}
//     else { setIndex(index-1)}
//     }


//     return <div className='slideshow '>
//      <img className="mainImg"  src={imgs[index]}/>
//      <div className='actions'>
//         <button onClick={prev}> <img src={ArrowLeft} /></button>
        
//         <button onClick={next}> <img src={ArrowRight}/></button>
//         </div>
//         <ImageMain arr={imgs} image={setIndex} index={index}></ImageMain>
       
     
//     </div>
//   }

    
                   

  // Add color to heart 
   
  const [colorHeart, setColorHeart] = useState(HeartCard);

   let toggle= true;
  
  
  const changeColor =()=> {
      toggle=!toggle;
      toggle? setColorHeart (HeartCard) : setColorHeart (HeartOrange);
     
      
  }


  // add color to heart
  const [colorStar, setColorStar] = useState(starEmptyUno);   

  let id = null;

  const changeColorStar =()=> {
    toggle=!toggle;
    
    toggle? setColorStar (starEmptyUno) : setColorStar (starOrangeUno);    
    
} 
  // add color to star
    const [rating, setRating]= useState(null);
    const [hover, setHover] = useState(null); 
        
   // slider card 
   let box = document.querySelector('.collection-card');
   
   
   const next= ()=> {
       let width= box.clientWidth;
       box.scrollLeft=box.scrollLeft + width;
    }

    const prev= ()=> {
        let width= box.clientWidth;
        box.scrollLeft=box.scrollLeft - width;
    }

    // scroll to different position

    const ref= useRef(null);
    

     const scrolltoArea =()=>{
        
        ref.current?.scrollIntoView({behavior: 'smooth'})      
        
    }

    const scrolltoAreaTable =()=>{
        
        window.scrollTo(0,3490)     
        
    }

    const scrolltoAreaAllAbout =()=>{
        
        window.scrollTo(0,1200)     
        
    }

    const scrolltoAreaReview=() =>{
        window.scrollTo(0,3900)    
    }

    return (
        <div className="main-product-page">

            <div className='top-product-page'>
                <img src={Arrow} alt=''/>
                <div className=''> Home </div>
                <div> / </div>
                <div className=''> Category </div>
                <div> / </div>
                <div className=''> Section </div>
                <div> / </div>
                <div> Name product</div>
            </div>

            <div className='main-card-product'>

                <div className='main-card-product-top'>
                <img src={Arrow} alt=''/>
                <div onClick={scrolltoAreaAllAbout}> All about</div>
                <div onClick={scrolltoAreaTable}> Technical characteristics</div>
                <div onClick={scrolltoAreaReview}> Reviews </div>
                <div onClick={scrolltoArea}> Related Products</div>
                </div>

                <div className='product-card'>
                     <div className='main-photo'>
                        <div className='colour-photo-product'>
                            <div className='first-colour'></div>
                            <div className='second-colour'></div>
                            <div className='third-colour'></div>
                            <div className='fourth-colour'></div>
                            <div className='fifth-colour'></div>
                        </div>
                        <div className='heart' > <img  src= {colorHeart}  onClick={changeColor} alt=''  /> </div>
                         
                       <div className="photo-view"> 
                        <img   src= { sliderData.value} height='450' width='500' />
                        </div> 
                        <div className='extra-photo'>
                             
                            {


                                imgs.map ((data,i) => 
                                    <div className='thumbnail'> 
                                        <img className={sliderData.id===i? "clicked" : ""} key={data.id} src={data.value} onClick={()=>HandleClick(i)} height="70" width="100"/>
                                     </div>
                                
                            )
                            }
                           {/* <Slideshow imgs={[
                            ExtraPhotoLaptop01,
                            ExtraPhotoLaptop02,
                            ExtraPhotoLaptop03,
                            ExtraPhotoLaptop04,
                            ExtraPhotoLaptop05,
                            ExtraPhotoLaptop06
 

                           ]} /> */}
                        {/* <div className='extra-photo1'> 
                            <img src={ExtraPhotoLaptop02}  alt=''/>
                            </div>
                        <div className='extra-photo2'> 
                            <img src={ExtraPhotoLaptop03}  alt=''/>
                            </div>
                        <div className='extra-photo3'> 
                            <img src={ExtraPhotoLaptop04}  alt=''/>
                            </div>
                        <div className='extra-photo4'> 
                            <img src={ExtraPhotoLaptop05}  alt=''/>
                            </div>
                        <div className='extra-photo5'> 
                            <img src={ExtraPhotoLaptop06}  alt=''/>
                            </div> */}
                        
                        </ div> 
                                            
                     </div>

                     <div className='back-panel'>
                          <div className='name-product'> Galaxy Book 3 Pro 14" </div>

                          <div className='star-product'>

                            {[...Array(5)].map((star,i) => {
                                const ratingValue= i + 1;
                                  return (
                                    <label className='inputRadio'>
                                        <input type="radio"
                                         name="rating" 
                                         className='inputRadio'                                        
                                                                      
                                         value={ratingValue}
                                         onClick= {() => setRating ( ratingValue )}                                       
                                         
                                         />

                                        <FaStar className='star' 
                                        size="40"                                      
                                        color= {ratingValue <= ( hover || rating ) ? "orange" : "gray"}                                         
                                        onMouseEnter={()=> setHover( ratingValue )}
                                        onMouseLeave={()=> setHover(null)}
                                         />
                                    </label>
                                  
                                )
                            })}
             
                            
                           
                            <label className='numberStar'>(125)</label>
                            </div>
                          <div className='stock'> In Stock </div>
                          <div className='price-product'> $ 1449,99</div>
                          <button className='btn-buy-now'> Buy Now </button>
                          <button className='btn-add-to-cart'> Add to Card</button>

                          <div className='choose'>
                            <lable> <strong >Choose Display</strong></lable>
                            <div className='choose-display'> 
                                <div className='section-uno-display'>14"</div>
                                <div className='section-dos-display'>16"</div>
                            </div>
                            <lable> <strong>Choose Processor</strong></lable>
                            <div className='choose-processor'>
                                  <div className='section-uno-processor'> Intel Core i5</div>
                                  <div className='section-dos-processor'> Intel Core i7</div>
                            </div>
                            <lable> <strong>Choose Storage</strong> </lable>
                            <div className='choose-storage'>
                                 <div className='section-uno-storage'>512 gb</div>
                                  <div className='section-dos-storage'> 1 Tb </div>
                            </div>

                            <lable> <strong>Choose RAM</strong> </lable>
                            <div className='choose-ram'>
                            <div className='section-uno-ram'> 16Gb</div>
                            <div className='section-dos-ram'> 32Gb</div>
                            </div>
                          </div>
                     </div>
            </div>

            </div>

            
            <div className='business-account'>
                <div className='container-iconsfour'>
                <img src={IconsFour} alt="" className='paint-business'/>
                </div>
                <div className='text'> <img src={Business} alt=''/></div>
                <button className='btn-sign-up'><strong>SIGN UP</strong></button>
            </div>


            <div className='all-about' ref={ref}> <strong>All about</strong></div>

            <div className='full-all-about'>
                
                <div className='first-section'>
                    <div className='first-section-right'>
                        <img src={FirstSection} alt='' className='picture1'/>
                    </div>
                    <div className='first-section-left'>
                        <img src={FirstSectionRight} alt='' className='picture2'/>
                    </div>
                </div>

                <div className='second-section'>
                    <div className='second-section-left'>
                    <img src={SecondsectionRight} alt='' className='picture3'/>
                    </div>
                    <div className='second-section-right'>
                    <img src={SecondsectionLeft} alt='' className='picture4'/>
                    </div>

                </div>

                <div className='third-section'>
                    <div className='third-section-left'>
                        <img src={ThirdSectionLeft} alt='' className='picture5'/>
                    </div>
                    <div className='third-section-right'>
                       <img src={ThirdSectionRight} alt='' className='picture6'/>
                    </div>

                </div>

                <div className='fourth-section'>
                    <img  src={FourthSection}  alt=''/>

                </div>
                
                <div className='fifth-section'>
                    <img  src={FifthSection}  alt=''/>

                </div>         
                 </div>


                 <div className='technical-characteristics' ref={ref}> <strong>Technical characteristics</strong></div>

                   <div className='top-table'> <strong>Name Product</strong></div>

                 <div className='technical-characteristics-table'>
                         <table className='table-container'>
                            <thead>
                                <tr>
                                    <th> <img src={BlackLogo} alt=''/></th>
                                    <th> 
                                         
                                            <img  className='image-product' src={PictureProduct} alt=''/>
                                            <div> Products name1</div>
                                            <button className='btn-add-to-card'> Add to card</button>
                                        
                                        </th>
                                    <th>
                                    
                                            <img  className='image-product' src={PictureProduct} alt=''/>
                                            <div> Products name2</div>
                                            <button className='btn-add-to-card'> Add to card</button>
                                    
                                    </th>
                                    <th>
                                
                                            <img  className='image-product' src={PictureProduct} alt=''/>
                                            <div> Products name3</div>
                                            <button className='btn-add-to-card'> Add to card</button>
                                    
                                    </th>
                                    <th>
                                    
                                            <img  className='image-product' src={PictureProduct} alt=''/>
                                            <div> Products name4</div>
                                            <button className='btn-add-to-card'> Add to card</button>
                                    
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <tr>Customer Review</tr>
                                        <tr>Color</tr>
                                        <tr>Display</tr>
                                        <tr>Processor</tr>
                                        <tr> Graphics</tr>
                                        <tr>Battery</tr>
                                        <tr> OS</tr>
                                        <tr>Memory</tr>
                                        <tr>Storage</tr>
                                        <tr>Webcam</tr>
                                    </td>
                                    <td>
                                        <tr><img src={colorStar}  onClick={changeColorStar} alt=''/> <img src={starEmpty}  onClick={changeColorStar} alt=''/> <img src={starEmpty} onClick={changeColorStar} alt=''/> <img src={starEmpty} onClick={changeColorStar} alt=''/> <img src={starEmpty}  onClick={changeColorStar} alt=''/></tr>
                                        <tr> 16"</tr>
                                        <tr> Graphite</tr>
                                        <tr> 16:10 AMOLED WQXGA+</tr>
                                        <tr> Intel Iris Xe Graphics</tr>
                                        <tr> 76Wh</tr>
                                        <tr>Wndows 11 PRO</tr>
                                        <tr> 16GB</tr>
                                        <tr>512 GB</tr>
                                        <tr> 1080p FHD</tr>
                                    </td>
                                    <td>
                                        <tr><img src={starEmpty} alt=''/> <img src={starEmpty} alt=''/> <img src={starEmpty} alt=''/> <img src={starEmpty} alt=''/> <img src={starEmpty} alt=''/></tr>
                                        <tr> 16"</tr>
                                        <tr> Graphite</tr>
                                        <tr> 16:10 AMOLED WQXGA+</tr>
                                        <tr> Intel Iris Xe Graphics</tr>
                                        <tr> 76Wh</tr>
                                        <tr>Wndows 11 PRO</tr>
                                        <tr> 16GB</tr>
                                        <tr>512 GB</tr>
                                        <tr> 1080p FHD</tr>
                                    </td>
                                    <td>
                                        <tr><img src={starEmpty} alt=''/> <img src={starEmpty} alt=''/> <img src={starEmpty} alt=''/> <img src={starEmpty} alt=''/> <img src={starEmpty} alt=''/></tr>
                                        <tr> 16"</tr>
                                        <tr> Graphite</tr>
                                        <tr> 16:10 AMOLED WQXGA+</tr>
                                        <tr> Intel Iris Xe Graphics</tr>
                                        <tr> 76Wh</tr>
                                        <tr>Wndows 11 PRO</tr>
                                        <tr> 16GB</tr>
                                        <tr>512 GB</tr>
                                        <tr> 1080p FHD</tr>
                                    </td>
                                    <td>
                                        <tr><img src={starEmpty} alt=''/> <img src={starEmpty} alt=''/> <img src={starEmpty} alt=''/> <img src={starEmpty} alt=''/> <img src={starEmpty} alt=''/></tr>
                                        <tr> 16"</tr>
                                        <tr> Graphite</tr>
                                        <tr> 16:10 AMOLED WQXGA+</tr>
                                        <tr> Intel Iris Xe Graphics</tr>
                                        <tr> 76Wh</tr>
                                        <tr>Wndows 11 PRO</tr>
                                        <tr> 16GB</tr>
                                        <tr>512 GB</tr>
                                        <tr> 1080p FHD</tr>
                                    </td>
                                </tr>
                            </tbody>
                         </table>
                 </div>

                 <div className='reviews'> 
                    <div className='just-name' ref={ref}><strong>Reviews</strong></div>

                    <div className=''>
                    <button className='btn-reviews'> <strong>Reviews</strong> 
                     <img src={arrowDown} alt='' className='arrow'/> 
                     </button> 
                     </div>
                     
                    </div>


                     <div className='estimate'>

                        <div className='result-estimate'>

                            <div className='first-section-estimate'> 
                                 <div className='result-of-calculation'> 4.8 </div>
                                 <div>of 125 reviews</div>
                                 <div><img src={starEmpty} alt=''/><img src={starEmpty} alt=''/><img src={starEmpty} alt=''/><img src={starEmpty} alt=''/><img src={starEmpty} alt=''/> </div>
                            </div>

                            <div className='second-section-estimate'>

                                  <div className='result-excellent'> 
                                        <div className='name-result' >Excellent</div>                                        
                                        <div className='line-result'></div>                                  
                                        <div className='result-number'> 100</div>                                   
                                  </div>

                                  <div className='result-good'> 
                                        <div className='name-result' >Good</div>                                        
                                        <div className='line-result'></div>                                  
                                        <div className='result-number'> 11</div>                                   
                                  </div>

                                  <div className='result-average'> 
                                        <div className='name-result' >Average</div>                                        
                                        <div className='line-result'></div>                                  
                                        <div className='result-number'> 3</div>                                   
                                  </div>

                                  <div className='result-bad'> 
                                        <div className='name-result' >Bad</div>                                        
                                        <div className='line-result'></div>                                  
                                        <div className='result-number'> 8</div>                                   
                                  </div>

                                  <div className='result-poor'> 
                                        <div className='name-result' >Poor</div>                                        
                                        <div className='line-result'></div>                                  
                                        <div className='result-number'> 1</div>                                   
                                  </div>
                            </div>

                        </div>

                        <div className='comment'>
                            <input type="text" className='input-comment' placeholder='Leave comment'></input>
                        </div>

                     </div>
                 

              <div className='person-comment'>

                   <div className='photo-name-comment'>
                    <div className='photo-user'> <img src={PhotoUser} alt=''/></div>
                    <div className='name-user'> <strong>Names User</strong></div>
                   </div>

                   <div className='star-comment'>
                   <img src={starEmpty} alt=''/>
                   <img src={starEmpty} alt=''/>
                   <img src={starEmpty} alt=''/>
                   <img src={starEmpty} alt=''/>
                   <img src={starEmpty} alt=''/>
                   <div className='short-comment'> Short comment </div> 
                   <div className='three-dots'>
                    <button className='btn-infa'><img src={ThreeDots} alt=''/></button>
                   </div>
                   </div>

                   <div className='date-comment'> Reviewed in the 
                    <div className='country-comment'>  United States</div>
                    <div className='date-of-comment'>  Junuary 22,2024</div>
                   </div>
                   <div className='comment-properties'> CPU: Intel Core i7 - 1360P   Capacity: 16" 32/1TB   Style: Windows 11 PRO</div>

                   <div  className='text-comment'>
                    The Laptop is light and the size is perfect for traveling
                   </div>

                   <div className='advantages-comment'><strong>Advantages:</strong>
                   <div className='text-advantages'> Good price</div>
                   </div>
                   <div className='disadvantages-comment'><strong>Disadvantages:</strong>
                   <div className='text-disadvantages'> None</div>
                   </div>
                   
                   <div  className='photo-panel'>
                    <img src={PhotoProduct} alt = '' className=''/>
                   </div>

                   <div className='lover-panel'>
                    <button className='answer-panel'> <img  src={ArrowBack} alt=''/></button>
                    <div className='thumb-panel'>
                    <div className='thumb-up'><img  src={ThumbUp} alt=''/></div>
                    <div className='love-number'> 0 </div>
                    <div className='thumb-down'><img  src={ThumbDown} alt=''/></div>
                    <div className='unlove-number'> 0 </div>
                    </div>
                   </div>
              </div>

              <div className='view-more'>
                <button className='btn-view-more' >View More <img src={ArrowDown} alt='' /></button>

              </div>


              <div className='related-products' ref={ref}> 
                 <div className='just-name'> Related Products</div>
                    <div className='left-button' >
                <button className='arrow-left' onClick={next}> <img src={ArrowLeft} alt=''></img></button>
                <button className='arrow-right' onClick={prev}>  <img src={ArrowRight} alt=''></img></button>
                </div>
              </div>



                 
              <div className='collection-card' >
                                      
                       
                        {/* <div className='card'>
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
                        
                    
                </div> */}
                                
               

                      

                <div  > <Card ></Card> </div>                        
                <div > <Card ></Card> </div>
                <div > <Card ></Card> </div>
                <div > <Card ></Card></div>
                <div > <Card ></Card></div>
                <div > <Card ></Card></div>
                <div > <Card ></Card></div>
                <div > <Card ></Card></div>
                <div > <Card ></Card></div>
                <div > <Card ></Card></div>
               
                
              </div>
              


            
        </div>
    )
}



export default ProductPage;