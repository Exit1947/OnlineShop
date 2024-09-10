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
                 <div className="point" ></div>
                <div className="canvas"></div>
                <div className="point1"></div>
                <div className="canvas1"></div>
                <div className="point2"></div>
                <div className="canvas2"></div>
                <div className="point3"></div>
                 </div> 
                 </div>

                 <div className="main-center">

                   
                    
                    <div className="filldatesecond">
                         
                         
                    <div className="card">
                    <div className="onescard">
                        <img src={Registri} alt="" />
                    </div>
                    </div>
                    <div className="confirmcard" >                       
                        <button className='btn-confirm2' value="text" onClick={prev} ><strong>Return to shoping</strong></button>
                    </div>
                        </div>

                    <div className="paint">
                        <img src={Finish} alt="" />
                    </div>
                 </div>
                </div>
            </div>
        );
    }
    




export default StepCuatro;