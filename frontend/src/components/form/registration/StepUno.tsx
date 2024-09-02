
import {useSteps} from 'react-step-builder';
import '../cssForm/StepUno.css';
import paint from '../image/Questions-rafiki 1.png'







const StepUno=(props) =>{

    const { next, prev } = useSteps();
   
        
        return (
            <div className="main-container">
                <div className="sidepanel">
                     <div className="top-side"> 
                        <div className="name-side">Create account</div>                      
                     </div>
                     
                    
                        <div className="line-vertical">
                           <div  >
                            <div className="line-vertical1"></div>
                            <div className="line-vertical2"></div>
                            <div className="line-vertical3"></div>
                            <div className="line-vertical4"></div>
                           </div>

                            <div className="spusok">
                                <div><strong>User Profile</strong></div>
                                <div>Residential Address</div>
                                <div>Bank Information</div>
                                <div>Finish</div>
                            </div>

                            </div>
                        
                    
                </div>
                <div className="between"></div>

                <div className="main-panel">

                 <div className="top-top">
                 <div className="main-top">  User Profile </div>
                      
                 <div className="gorizontal-line"> 
                 <div className="point" >0%</div>
                <div className="canvas"></div>
                <div className="point1"></div>
                <div className="canvas1"></div>
                <div className="point2"></div>
                <div className="canvas2"></div>
                <div className="point3"></div>
                 </div> 
                 </div>

                 <div className="main-center">

                    <div className="filldate">
                        <div className="label">Full name</div>
                        <input type="text" className="input-name"/>
                        <div className="label">Email</div>
                        <input type="email" className="input-email" />
                        <div className="label">Phone number</div>
                        <input type="text" className="input-phone"/>                        
                        <div className="label"> Date of birth</div>
                        <div className="input-date-birth">                     
                        <input  type="select" className="input-date" placeholder="Day" ></input>
                        <input type="month" className="input-month" placeholder="Month"/>
                        <input type="number" className="input-year" placeholder="Year"/>                        
                        </div>
                        <div>
                        <button className="btn-confirm" onClick={next} ><b>Next</b></button>
                        </div>                       

                    </div>  
                                        

                    <div className="paint">
                        <img src={paint} alt="" className="firstimage"/>
                    </div>
                 </div>
                </div>
            </div>
        );
    }
    




export default StepUno;