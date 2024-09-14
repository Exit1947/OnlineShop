
import {useSteps} from 'react-step-builder';
import '../cssForm/StepTres.css';
import Payment from '../image/Mobile payments.png';
import CreditCard from '../image/Credit Card.png';


const StepTres= (props) =>{
    
    const { next, prev } = useSteps();
        return (
            <div className="main-container">

<div className="sidepanel">
                     <div className="top-side"> 
                        <div className="name-side">Create account</div>                      
                     </div>
                     
                    
                        <div className="line-vertical">
                           <div  >
                            <div className="line-vertical6"></div>
                            <div className="line-vertical7"></div>
                            <div className="line-vertical8"></div>
                            <div className="line-vertical4"></div>
                           </div>

                            <div className="spusok">
                                <div>User Profile</div>
                                <div>Residential Address</div>
                                <div><strong>Bank Information</strong></div>
                                <div>Finish</div>
                            </div>

                            </div>
                        
                    
                </div>



               <div className="between">
               
               </div>




            <div className="main-panel">
               
                <div className="top-top">
                 <div className="main-top"> Bank Information </div>


                    <div className='line-sign'>
                    <div className='number-percent'>
                        <div className='percent66'>66%</div>
                    </div>  
                 <div className="gorizontal-line"> 
                 <div className="point" ></div>
                <div className="canvas4"></div>
                <div className="point4"></div>
                <div className="canvas5"></div>
                <div className="point5"></div>
                <div className="canvas2"></div>
                <div className="point3"></div>
                </div>
                 </div> 
                 </div>


               

                <div className="main-center"> 

                   <div className="filldate">

                    <div className="onescard">
                        <img src={CreditCard} alt="" className='card' />                    
                    </div>
                    
                    <div className="infocard">
                      
                        <label className="label">Card Number</label>
                        <input type="text" placeholder="" className="card-number" />
                           
                      <div className="dosinput">

                        <div className="nazva">
                        <label>Exp.Date</label> 
                        <label> CVV</label>
                        
                        </div> 

                          <input type="Date" placeholder=""  className="datainput"/>                          
                          <input type="text" placeholder=""  className="cvvinput"/>
                      </div>

                      <div className="dosbutton2" >
                        <button className="btn-confirm1" onClick={prev}><strong>Back</strong></button>
                        <button className="btn-confirm2" onClick={next}><strong>Finish</strong></button>
                    </div>
                      </div>
                   
                    
                    

                   </div>

                   <div className="paint">
                      <img src={Payment} alt="" className="firstimage"/>
                   </div>


                      </div>            
            
                

            </div>


        </div>


        )
    }




export default StepTres;