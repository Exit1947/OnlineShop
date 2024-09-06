
import {useSteps} from 'react-step-builder';
import '../cssForm/StepTres.css';
import Payment from '../image/Mobile payments.png';
import CreditCard from '../image/Credit Card.png';


const StepTres= (props) =>{
    
    const { next, prev } = useSteps();
        return (
            <div className="conteiner">

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
               
                <div className="top-main">
                <h1 className="nazvabank"><span>Bank Information</span></h1>
                <div className="line-main">
                <div className="point" ></div>
                <div className="canvas"></div>
                <div className="point1"></div>
                <div className="canvas1"></div>
                <div className="point2"> 66%</div>
                <div className="canvas2"></div>
                <div className="point3"></div>
                </div>                            
                </div>


                <div className="middle-line">
                 <div  className="line-top"></div>
                </div>

                <div className="main-card"> 

                   <div className="card">
                    <div className="onescard">
                        <img src={CreditCard} alt="" />
                    </div>
                    <div className="infocard">
                      <div className="unoinput">
                        <p className="nazvacard">Card Number</p>
                        <input type="text" placeholder="" className="card-number" />
                        </div>      
                      <div className="dosinput">
                        <div className="nazva">
                        <p>Exp.Date</p> 
                        <p> CVV</p>
                        </div>                        
                          <input type="Date" placeholder=""  className="datainput"/>                          
                          <input type="text" placeholder=""  className="cvvinput"/>
                      </div>
                    </div>
                    <div className="confirmcard" >
                        <button className="btn-confirm1" onClick={prev}><b>Back</b></button>
                        <button className="btn-confirm2" onClick={next}><b>Finish</b></button>
                    </div>
                    <div></div>

                   </div>

                   <div className="cool-draw">
                      <div className="payment"><img src={Payment} alt="" /></div>
                   </div>


                      </div>            
            
                

            </div>


        </div>


        )
    }




export default StepTres;