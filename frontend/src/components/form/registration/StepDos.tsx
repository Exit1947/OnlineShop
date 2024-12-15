
import {useSteps} from 'react-step-builder';
import '../cssForm/StepDos.css';
import housesearch from  '../image/House searching-rafiki 1 (1).png'






const StepDos= (props) => {
    
    const { next, prev, jump} = useSteps();
        
        return (
            <div className="main-container">
                <div className="sidepanel">
                     <div className="top-side"> 
                        <div className="name-side">Create account</div>                      
                     </div>
                     
                    
                        <div className="line-vertical">
                           <div  >
                            <div className="line-vertical6"></div>
                            <div className="line-vertical5"></div>
                            <div className="line-vertical3"></div>
                            <div className="line-vertical4"></div>
                           </div>

                            <div className="spusok">
                                <div onClick={()=>jump(1)}>User Profile</div>
                                <div onClick={()=>jump(2)}><strong>Residential Address</strong></div>
                                <div onClick={()=>jump(3)}>Bank Information</div>
                                <div onClick={()=>jump(4)}>Finish</div>
                            </div>

                            </div>
                        
                    
                </div>
                <div className="between"></div>

                <div className="main-panel">

                 <div className="top-top">
                 <div className="main-top"> <strong>Residential Address</strong> </div>

                   <div className='line-sign'>
                    <div className='number-percent'>
                        <div className='percent33'>33%</div>
                    </div>   
                 <div className="gorizontal-line"> 
                 <div className="point" ></div>
                <div className="canvas4"></div>
                <div className="point4"></div>
                <div className="canvas1"></div>
                <div className="point2"></div>
                <div className="canvas2"></div>
                <div className="point3"></div>
                </div>
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
                        <img src={housesearch} alt="" className="firstimage"/>
                    </div>
                 </div>
                </div>
            </div>
        );
    }
    




export default StepDos;