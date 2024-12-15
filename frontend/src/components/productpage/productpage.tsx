import './productpagestyle.css';
import React from 'react';
import Card from './card.tsx'
import {useParams} from 'react-router-dom'
import { Rating } from 'react-simple-star-rating';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect, useRef} from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import Arrow from '../../img/icons-arrow-left.png';
import IconsFour from '../../img/Frame 427319916.png';
import Business from '../../img/Frame 427319913.png';
import FirstSection from '../../img/left first section.png';
import FirstSectionRight from '../../img/right first section.png';
import SecondsectionLeft from '../../img/left second section .png';
import SecondsectionRight from '../../img/right second section.png';
import ThirdSectionLeft  from '../../img/left  third section .png';
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
import Footer from   "../footer/Footer.tsx";
import Header from "../header/Header.tsx";
import "react-multi-carousel/lib/styles.css";
import Dropdown from './../dropmenu/Dropdown.tsx';
import Aftermenu from './../aftermenu/Aftermenu.tsx';
import LanguageDropdown from './../languagedrop/LanguageDropdown.tsx';
import CurrencyDropdown from './../currencydropdown/CurrencyDropdown.tsx';
import ProductList from '../productlist/ProductList.tsx';

// https://omnify-online-marketplace-storage.s3.eu-north-1.amazonaws.com/2.png



const ProductPage = (props) => {

    const {id} = useParams()

  const [data, setData]= useState([])
  const [mediaList, setMediaList] = useState([]);

    useEffect (()=> {
    axios.get(`http://localhost:8080/api/product/id=${id}`).
    then((response) => {
        setData(response.data)
        setMediaList(response.data.mediaList)}
    )
     
     
      
     
      }, [])
    
  
      console.log(data);
      


     // NAVIGATED

     const navigate =useNavigate();
     const navigate1 =useNavigate();

   function navMainPage (event){
    event.preventDefault();
    navigate('/auth/comment', { replace: true });
   } 
     

   function returnMainPage (event){
    event.preventDefault();
    navigate('/', { replace: true });    
   }


   function navCategory (event){
    event.preventDefault();
    navigate('/auth/subcategories', { replace: true });
   } 


   function navCart (event){
    event.preventDefault();
    navigate('/cardpage/:id', { replace: true });
   }

   /// Id
      
    // SLIDER MAIN PRODUCT
    
    const imgs =[
        {id:0, value:ExtraPhotoLaptop01},
        {id:1, value:ExtraPhotoLaptop02},
        {id:2, value:ExtraPhotoLaptop03},
        {id:3, value:ExtraPhotoLaptop04},
        {id:4, value:ExtraPhotoLaptop05},
        {id:5, value:ExtraPhotoLaptop06},
    ];

  const [sliderData, setSliderData] = useState(mediaList[0])

    const HandleClick = (id) =>{
        const slider=mediaList[id];
        setSliderData(slider);
    }



    
                   

  // Add color to heart 
   
  const [colorHeart, setColorHeart] = useState(HeartCard);

   let toggle= true;
  
  
  const changeColor =()=> {
      toggle=!toggle;
      toggle? setColorHeart (HeartCard) : setColorHeart (HeartOrange);
     
      
  }


  // add color to heart
  const [colorStar, setColorStar] = useState(starEmptyUno);   

  

  const changeColorStar =()=> {
    toggle=!toggle;
    
    toggle? setColorStar (starEmptyUno) : setColorStar (starOrangeUno);    
    
} 
  // add color to star
    const [rating, setRating]= useState(null);
    const [hover, setHover] = useState(null); 
      
    


   // slider card 


    

    let elementRef = useRef(null);

      
    const next = (scrollOffset) => {
           elementRef.current.scrollLeft+=scrollOffset; 
       
       
       
    }

    

    
    
    

    // scroll to different position

    const ref= useRef(null);
    

     const scrolltoArea =()=>{
        
        ref.current.scrollIntoView({behavior: 'smooth'})      
        
    }

    const scrolltoAreaTable =()=>{
        
        window.scrollTo(0,3490)     
        
    }

    const scrolltoAreaAllAbout =()=>{
        
        window.scrollTo(0,1200)     
        
    }

    const scrolltoAreaReview=() =>{
        window.scrollTo(0,4500)    
    }


     
      



    // add fat border to button area

    const [toggleOrange,  setToggleOrange] = useState('14"');
    const [toggleOrange1, setToggleOrange1] = useState('Intel Core i5');
    const [toggleOrange2, setToggleOrange2] = useState('512 gb');
    const [toggleOrange3, setToggleOrange3] = useState('16Gb');

    
    
  // create counter 

  const [counter, setCounter] = useState(0);
  const [counterMinus, setCounterMinus] = useState(0);
   
    const plusCounter= ()=> {
        setCounter  (counter + 1);
    }

    const minusCounter= ()=> {
        setCounter  (counter - 1);
        setCounterMinus(counterMinus + 1);
    }


    // add comment to reviews

    const myFormRef= useRef(null); 

    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);


    const onChangeHandler = (event) => {
        setComment(event.target.value);
    }

    const onFormSubmit = ()=> {
   
        setComments((comments)=> [...comments, comment]);
    }


    // ADD Answer
       
    const [showField, setshowField]= useState(1);

    const handleshow = (e)=> {
     setshowField(e);
    }
//ADD AXIOUS

    // const [data, setData]= useState();  

    

    //     useEffect(() => {
    //       const fetchData = async () => {
    //         try {
    //           const response = await axios.get('http://localhost:8080/api/product/id=1');
    //           setData(response.data); // Зберігаємо лише потрібні дані
    //           console.log(data);
              
    //         } catch (error) {
    //           console.error('Помилка запиту:', error);
    //         }
    //       };
      
    //       fetchData();
    //     }, []);


       
        // add comment to reviews

    
      
       
    



    return (

        <>
            <Header />            
            <Aftermenu/>
            <Dropdown/>
            <LanguageDropdown/>
            <CurrencyDropdown/>

      
        <div className="main-product-page">

            <div className='top-product-page'>
                <img src={Arrow} alt=''/>
                <div className='' onClick={returnMainPage}> Home </div>
                <div> / </div>
                <div className='' onClick= {navCategory}> Category </div>
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
                       {/* <img className='thumbnail' src={mediaList.mediaUrl} /> */}
                       </div>
                        <div className='extra-photo'>
                          
                           { 

                                      mediaList.map((media,j) => {
                                                 return (
                                  
                                   <img  src={media.mediaUrl} alt="..."  />
                                                    )
                                              })
                            //        mediaList.map ((image,number) => {
                            //         return (  
                            //          <div className='thumbnail'> 
                            //              <img className={sliderData.id===number? "clicked" : ""} 
                            //               key={image.id}
                            //               src={image.mediaUrl} 
                            //               onClick={()=>HandleClick(number)} height="70" width="100"/>
                            //           </div>
                            //         )
                            //     }
                                
                            // )
                            } 
                          
                        
                        </ div>                                             
                     </div>

                     <div className='back-panel'>
                          <div className='name-product'> {data.title} </div>

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
                          <div className='price-product'> $ {data.price}</div>
                          <button className='btn-buy-now' > Buy Now </button>
                          <button className='btn-add-to-cart' onClick={navCart}> Add to Card</button>

                          <div className='choose'>
                            <lable> <strong >Choose Display</strong></lable>
                            <div className='choose-display'> 
                                <div className={ toggleOrange==='16"' ?  'section-uno-display' : 'section-uno-display-border'}  onClick={()=>{setToggleOrange('14"')}}>14"</div>
                                <div className={ toggleOrange==='14"' ? 'section-dos-display' : 'section-dos-display-border' }  onClick={()=>{setToggleOrange('16"')}}>16"</div>
                            </div>
                            <lable> <strong>Choose Processor</strong></lable>
                            <div className='choose-processor'>
                                  <div className={ toggleOrange1==='Intel Core i7' ?  'section-uno-processor' : 'section-uno-processor-border'} onClick={()=>{setToggleOrange1('Intel Core i5')}}> Intel Core i5</div>
                                  <div className={ toggleOrange1==='Intel Core i5' ?  'section-dos-processor' : 'section-dos-processor-border'} onClick={()=>{setToggleOrange1('Intel Core i7')}}> Intel Core i7</div>
                            </div>
                            <lable> <strong>Choose Storage</strong> </lable>
                            <div className='choose-storage'>
                                 <div className= { toggleOrange2==='1 Tb' ?  'section-uno-storage' : 'section-uno-storage-border'}  onClick={()=>{setToggleOrange2('512 gb')}}>512 gb</div>
                                  <div className= { toggleOrange2==='512 gb' ?  'section-dos-storage' : 'section-dos-storage-border'} onClick={()=>{setToggleOrange2('1 Tb')}}> 1 Tb </div>
                            </div>

                            <lable> <strong>Choose RAM</strong> </lable>
                            <div className='choose-ram'>
                            <div className= { toggleOrange3==='32Gb' ?  'section-uno-ram' : 'section-uno-ram-border'}  onClick={()=>{setToggleOrange3('16Gb')}}> 16Gb</div>
                            <div className= { toggleOrange3==='16Gb' ?  'section-dos-ram' : 'section-dos-ram-border'}  onClick={()=>{setToggleOrange3('32Gb')}}> 32Gb</div>
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
                                    <th> <img src={BlackLogo} alt='' width='300' height='100'/></th>
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
                            <button  className='input-comment' onClick={navMainPage} > Leave comment   </button>
                        {/* <form   >
                            { comments.map ((text) => (
                              <div className='comment-container'>{text}</div>    
                            ))}
                            
                            <textarea 
                              className='input-comment'
                              value={comment} 
                              onChange ={onChangeHandler} 
                              placeholder='Leave comment'>                                              
                              
                            </textarea>
                            </form>
                            <button className='btn-post' onClick={onFormSubmit}>POST</button>        
                        </div> */}
                       
                       </div>
                     </div>
                 

              <div className='person-comment'>

                   <div className='photo-name-comment'>
                    <div className='photo-user'> <img src={PhotoUser} alt=''/></div>
                    <div className='name-user'> <strong>Vivian Weaver</strong></div>
                    <button className='btn-infa'> <img src={ThreeDots} alt='' /></button>
                   </div>

                   <div className='star-comment'>
                   <div className="stars">
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
                   </div>
                   
                   <div className='short-comment'> Love this laptop, like a MacBook but for Windows </div> 

                   
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
                    <img src={PhotoProduct} alt = '' className='' />
                   </div>

                   <div className='lover-panel'>                    
                    <button className='answer-panel' onClick={()=>handleshow(2)}> <img  src={ArrowBack} alt=''/></button>

                   
                    <div className='thumb-panel'>
                    <div className='thumb-up' onClick={plusCounter}><img  src={ThumbUp} alt=''/></div>
                    <div className='love-number' > {counter} </div>
                    <div className='thumb-down' onClick={minusCounter}><img  src={ThumbDown} alt=''/></div>
                    <div className='unlove-number' > {counterMinus} </div>
                    </div>
                   </div>
                   <div className={ showField===2 ?  'input-comment-answer-show' : 'input-comment-answer'} onClick={()=>handleshow(1)}></div>
              </div>

              <div className='view-more'>
                <button className='btn-view-more' >View More <img src={ArrowDown} alt='' /></button>

              </div>


              <div className='related-products' ref={ref}> 
                 <div className='just-name'> Related Products</div>
                    <div className='left-button' >
                <button className='arrow-left' onClick={() => next(-260)}> <img src={ArrowLeft} alt='' /></button>
                <button className='arrow-right' onClick={()=> next(+260)}> <img src={ArrowRight} alt=''/> </button>
                </div>
              </div>
 

                 
            <div className='collectioncard'  ref={elementRef}>
                                      

                                
                                <div><Card ></Card></div> 
                                <div><Card></Card></div>
                                <div><Card></Card></div>
                                <div><Card></Card></div>
                                <div><Card></Card></div>
                                <div><Card></Card></div>
                                <div><Card></Card></div>
                                <div><Card></Card></div>
                                <div><Card></Card></div>
                                <div><Card></Card></div>
                                <div><Card></Card></div>
                                <div><Card></Card></div>
                                <div><Card></Card></div>
                                 
                                   
                
              </div>
              


             
        </div>

        <Footer/>
        </>
     
    )
}



export default ProductPage;