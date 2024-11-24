import React, {useState, useEffect, useRef} from "react";
import './comments.css';
import { Rating } from 'react-simple-star-rating';
import { FaStar } from 'react-icons/fa';
import starEmpty from '../../img/star-empty.png';
import PhotoUser from '../../img/image 95.png';
import ThreeDots from '../../img/three-dots.png';
import ThumbUp from '../../img/thumb-up.png';
import ThumbDown from '../../img/thumb-down.png';
import PhotoProduct from '../../img/Frame 427320002.png';
import ArrowBack from '../../img/arrow back.png';
import photoFrame from '../../img/frame photo.png';
import axios from "axios";


const Comment =()=>
{
 /// ADD COUNTER
   const [counter, setCounter] = useState(0);
  const [counterMinus, setCounterMinus] = useState(0);
   
    const plusCounter= ()=> {
        setCounter  (counter + 1);
    }

    const minusCounter= ()=> {
        setCounter  (counter - 1);
        setCounterMinus(counterMinus + 1);
    }

   // add color to star
   const [rating, setRating]= useState(null);
   const [hover, setHover] = useState(null); 


   // add image
   const inputRef= useRef(null);
   const inputRef1= useRef(null);
   const [image, setImage] = useState();
   const [image1, setImage1] = useState();
 
  const handleImageClick = () => {
    
  inputRef.current.click();

  }
  const handleImageClick1 = () => {
    
    inputRef1.current.click();
  
    }


  const handleImageChange= (e) => {
    const file= e.target.files[0];
      setImage(file);
  }  

  const handleImageChange1= (e) => {
    const file1= e.target.files[0];
      setImage1(file1);
  }
  


  // const outImage = () => {
  //   const formdata = new FormData();
  //   formdata.append('image', image);
  //   axios.post('url', formdata);
  // }

  let date= new Date();
  let data=date.getMonth()+1;


  return (
    <div className="container-comment">
      <form className='form-comment'>
    <div className='person-comment'>
  
                   <div className='photo-name-comment1'>
                    <div className='photo-user1'> <img src={PhotoUser}  alt='photo-user'/></div>
                    <div className='name-user1'> <strong> Vivian Weaver</strong></div>
                    <div className="btn-infa1">  <img src={ThreeDots} alt='dots'/></div>
                    
                   </div>

                   <div className='star-comment1'>
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
                   
                   <div>
                
                    <div className='short-comment1'> Love this laptop, like a MacBook but for Windows </div>
                           
                   
                    
                    </div>

                   
                   </div>

                   <div className='date-comment1'> Reviewed in the 
                    <div className='country-comment1'>  United States : </div>
                    <div className='date-of-comment1'>  {date.getDate().toString()} {data}  {date.getFullYear().toString()} </div>
                   </div>
                   <div className='comment-properties1'> CPU: Intel Core i7 - 1360P   Capacity: 16" 32/1TB   Style: Windows 11 PRO</div>

                   <div  className='text-comment1'>

                   <textarea className="input-comment1"
                    placeholder="Leave comment">

                    </textarea>
                   </div>

                   <div className='advantages-comment1'><strong>Advantages:</strong>
                   <textarea className="input-advanteges1"
                    placeholder="Leave advanteges">

                    </textarea>
                   </div>
                   <div className='disadvantages-comment1'><strong>Disadvantages:</strong>
                   <textarea className="input-disadvantages1"
                    placeholder="Leave disadvantages">

                    </textarea>
                   </div>
                   
                   <div  className='photo-panel' >

                    <form  className="add-photo-infa1" >
                   

                    <div  onClick={handleImageClick}  className="photo-add1">
                    {image? (<img src={URL.createObjectURL(image)} alt=''  ></img>) : (<img src={photoFrame} alt = ''   />) }
                    <input type='file' name='file' ref={inputRef} onChange={handleImageChange} style= {{display: "none"}}/>
                   
                    </div>
                  
                   <div onClick={handleImageClick1} className="photo-add1">
                       {image1? (<img src={URL.createObjectURL(image1)} alt=''  ></img> ): (<img src={photoFrame} alt = ''  />) }
                       <input type='file' name='file' ref={inputRef1} onChange={handleImageChange1} style= {{display: "none"}}/>
                     </div>
                    </form>
  
                   </div>

                   <button  className="post-comment1" > POST </button>
                   
              </div>
              </form>
              </div>
  )
}



export default Comment;