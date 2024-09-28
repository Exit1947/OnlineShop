import './productpagestyle.css';
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
import starEmpty from '../../img/icons8-star-25.png';
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
import HeartCard from '../../img/heart.png';


const ProductPage = () => {


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
                <div> All about</div>
                <div> Technical characteristics</div>
                <div> Tables</div>
                <div> Reviews </div>
                <div> Related Products</div>
                </div>
            </div>

            <div className='business-account'>
                <div className='container-iconsfour'>
                <img src={IconsFour} alt="" className='paint-business'/>
                </div>
                <div className='text'> <img src={Business} alt=''/></div>
                <button className='btn-sign-up'><strong>SIGN UP</strong></button>
            </div>


            <div className='all-about'> All about</div>

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


                 <div className='technical-characteristics'> <strong>Technical characteristics</strong></div>

                   <div className='top-table'> <strong>Name Product</strong></div>

                 <div className='technical-characteristics-table'>
                         <table className='table-container'>
                            <thead>
                                <tr>
                                    <th> <img src={BlackLogo} alt=''/></th>
                                    <th> 
                                         <div>
                                            <img  className='image-product' src={PictureProduct} alt=''/>
                                            <div> Products name1</div>
                                            <button className='btn-add-to-card'> Add to card</button>
                                        </div>
                                        </th>
                                    <th>
                                    <div>
                                            <img  className='image-product' src={PictureProduct} alt=''/>
                                            <div> Products name2</div>
                                            <button className='btn-add-to-card'> Add to card</button>
                                        </div> 
                                    </th>
                                    <th>
                                    <div>
                                            <img  className='image-product' src={PictureProduct} alt=''/>
                                            <div> Products name3</div>
                                            <button className='btn-add-to-card'> Add to card</button>
                                        </div>
                                    </th>
                                    <th>
                                    <div>
                                            <img  className='image-product' src={PictureProduct} alt=''/>
                                            <div> Products name4</div>
                                            <button className='btn-add-to-card'> Add to card</button>
                                        </div>
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
                    <div className='just-name'><strong>Reviews</strong></div>

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


              <div className='related-products'> 
                 <div className='just-name'> Related Products</div>
                    <div className='left-button' >
                <button className='arrow-left'><img src={ArrowLeft} alt=''></img></button>
                <button className='arrow-right'> <img src={ArrowRight} alt=''></img></button>
                </div>
              </div>


              <div className='collection-card'>

                <div className='card'>

                    <div className='top-card'>
                    <div className='title-card'> Asus TUF Gaming A15 (2023)</div>
                    <div className='heart-card'> <img src={HeartCard} alt=''/></div>
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
                        <div className='star-card'> <img src={starEmpty} alt=''/></div>
                        <div className='rating-card'> 4,7</div>
                    </div>
                    
                    
                </div>
                <div className='card'> </div>
                <div className='card'> </div>
                <div className='card'> </div>
                <div className='card'> </div>
                <div className='card'> </div>
                <div className='card'> </div>

              </div>


            
        </div>
    )
}


export default ProductPage;