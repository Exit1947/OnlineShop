import {useSteps} from 'react-step-builder';
import '../cssForm/StepCuatro.css';
import Finish from  '../image/Super thank you.png';
import Registri from '../image/registration.png';






const StepCuatro= (props) => {
    
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
                            <div className="line-vertical2"></div>
                            <div className="line-vertical3"></div>
                            <div className="line-vertical9"></div>
                           </div>

                            <div className="spusok">
                                <div>User Profile</div>
                                <div>Residential Address</div>
                                <div>Bank Information</div>
                                <div><strong>Finish</strong></div>
                            </div>

                            </div>
                        
                    
                </div>
                <div className="between"></div>

                <div className="main-panel">

                 <div className="top-top">
                 <div className="main-top"> Finish </div>
                      
                 <div className="gorizontal-line"> 
                 <div className="point4" ></div>
                <div className="canvas4"></div>
                <div className="point5"></div>
                <div className="canvas5"></div>
                <div className="point5"></div>
                <div className="canvas5"></div>
                <div className="point4">100%</div>
                 </div> 
                 </div>

                 <div className="main-center">

                   
                    
                    <div className="filldatesecond">
                         
                         
                    <div className="card">
                    <div className="onescard1">
                        <img src={Registri} alt=""  />
                    </div>
                    </div>
                    <div className="confirmcard" >                       
                        <button className='btn-confirm2' value="text" onClick={prev} ><strong>Return to shoping</strong></button>
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