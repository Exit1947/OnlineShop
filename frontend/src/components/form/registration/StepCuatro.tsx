import {useSteps} from 'react-step-builder';
import '../cssForm/StepCuatro.css';
import Finish from  '../image/Super thank you.png';
import Registri from '../image/registration.png';
import StepDos from './StepDos';
import { useNavigate } from 'react-router-dom'








const StepCuatro= (props) => {
    
    const { next, prev, jump } = useSteps();
    const navigate =useNavigate();
    function navMain (event){
        event.preventDefault();
        navigate('/', { replace: true });    
       }
        
        return (
 

            <div className="main-container">
                <div className="sidepanel">
                     <div className="top-side"> 
                        <div className="name-side">Create account</div>                      
                     </div>
                     
                    
                        <div className="line-vertical">
                           <div  >
                            <div className="line-vertical6"></div>
                            <div className="line-vertical2"></div>
                            <div className="line-vertical3"></div>
                            <div className="line-vertical9"></div>
                           </div>

                            <div className="spusok">
                                <div onClick={()=>jump(1)}>User Profile</div>
                                <div onClick={()=>jump(2)}>Residential Address</div>
                                <div onClick={()=>jump(3)}>Bank Information</div>
                                <div onClick={()=>jump(4)}><strong>Finish</strong></div>
                            </div>

                            </div>
                        
                    
                </div>
                <div className="between"></div>

                <div className="main-panel">

                 <div className="top-top">
                 <div className="main-top"> <strong>Finish</strong> </div>

                    <div className='line-sign'>
                    <div className='number-percent'>
                        <div className='percent100'>100%</div>
                    </div>  
                 <div className="gorizontal-line"> 
                 <div className="point4" ></div>
                <div className="canvas4"></div>
                <div className="point5"></div>
                <div className="canvas5"></div>
                <div className="point5"></div>
                <div className="canvas5"></div>
                <div className="point4"></div>
                 </div> 
                 </div>
                 </div>

                 <div className="main-center">

                   
                    
                    <div className="filldatesecond">
                         
                         
                    

                    <div className="onescard1">
                        <img src={Registri} alt=""  />
                    </div>
                    
                   

                    <div className="dosbutton" >                       
                        <button className='btn-confirm3' value="text" onClick={navMain} ><strong>Return to shoping</strong></button>
                    </div>

                        </div>

                    <div className="paint">
                        <img src={Finish} alt="" className='firstimage' />
                    </div>

                 </div>
                </div>
            </div>
        );
    }
    




export default StepCuatro;