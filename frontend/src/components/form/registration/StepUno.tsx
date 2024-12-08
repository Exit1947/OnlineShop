
import {useSteps} from 'react-step-builder';
import '../cssForm/StepUno.css';
import paint from '../image/Questions-rafiki 1.png'







const StepUno=(props) =>{

    const { next, prev, jump } = useSteps();
   
        
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
                                <div onClick={() =>jump(1)}><strong>User Profile</strong></div>
                                <div onClick={()=> jump(2)}>Residential Address</div>
                                <div onClick={()=>jump(3)}>Bank Information</div>
                                <div onClick={()=>jump(4)}>Finish</div>
                            </div>

                            </div>
                        
                    
                </div>
                <div className="between"></div>

                <div className="main-panel">

                 <div className="top-top">
                 <div className="main-top">  User Profile </div>
                
                 <div className='line-sign'>
                    <div className='number-percent'>
                        <div className='percent0'>0%</div>
                    </div>
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
                        <select  type="select" className="input-date">
                            <option value="day">Day</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <select type="month" className="input-month">
                            <option value="month">Month</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                        <select type="number" className="input-year" >
                        <option value="year">Year</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        </select>                        
                        </div>

                        
                        <div className='dosbutton1'>
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