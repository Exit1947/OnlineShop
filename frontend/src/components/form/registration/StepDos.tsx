
import {useSteps} from 'react-step-builder';
import '../cssForm/StepDos.css';
import housesearch from  '../image/House searching-rafiki 1 (1).png'






const StepDos= (props) => {
    
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
                                <div>User Profile</div>
                                <div><strong>Residential Address</strong></div>
                                <div>Bank Information</div>
                                <div>Finish</div>
                            </div>

                            </div>
                        
                    
                </div>
                <div className="between"></div>

                <div className="main-panel">

                 <div className="top-top">
                 <div className="main-top"> Residential Address </div>
                      
                 <div className="gorizontal-line"> 
                 <div className="point" ></div>
                <div className="canvas"></div>
                <div className="point1">33%</div>
                <div className="canvas1"></div>
                <div className="point2"></div>
                <div className="canvas2"></div>
                <div className="point3"></div>
                 </div> 
                 </div>

                 <div className="main-center">

                   
                    
                    <div className="filldatesecond">
                        <div className="label">Country</div>
                        <input type="text" className="input-region"/>
                        <div className="label">Region</div>
                        <input type="email" className="input-settlement" />
                        <div className="label">Settlement</div>
                        <input type="text" className="input-address"/>                        
                        <div className="label"> Address</div>
                        <div className="input-date-adress">                     
                        <input  type="text" className="input-street" placeholder="Street" ></input>
                        <input type="number" className="input-number" placeholder="Number"/>
                        <input type="number" className="input-index" placeholder="Index"/>                        
                        </div>
                        <div className="dosbutton">
                        <button className="btn-confirm1"  onClick={prev} ><b>Back</b></button>
                        <button className="btn-confirm2" onClick={next} ><b>Next</b></button>
                        </div>
                        </div>

                    <div className="paint">
                        <img src={housesearch} alt="" className="secondimage"/>
                    </div>
                 </div>
                </div>
            </div>
        );
    }
    




export default StepDos;