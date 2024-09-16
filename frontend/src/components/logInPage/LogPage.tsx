import  './loginStyle.css'
import logoPage from '../../img/Group 1474.png';
import FitImage from 'react-native-fit-image';



const LoginPage =()=>{
      

    return (

        <div className="login-container">
             
            <div className='logo-box'>

                <div className='top-box'>

                <div className='box-image'  >
                
                    <img src={logoPage} alt="" className='paint'  />
                
                </div>


                <div className='boxes'>


                <div className='box-title'>            
                <div className='sign'>Sign in</div>
                 </div>

            <div className='box-input'>            
            <form>
                <label><strong>Email or mobile phone number</strong></label>
                <input type="text" placeholder="" className="input-number"/>
                <div className='between'></div>
                <label>P a s s w o r d</label>
                <input type="password" placeholder="" className="input-password"/>
                <div className='between'></div>                
                
                <button type="submit" className="btn-confirm">L o g i n</button>
            </form>
            </div>

            </div>

            <div className='newOmnify'>
                <hr className='line-under'></hr>
                <div className='new-omnify'>New to Omnify?</div>
                <hr className='line-after'></hr>
            </div>

            <button type="submit" className="btn-create-account">Create your Omnify account</button>
            </div>
            </div>
        </div>
    )
}


export default LoginPage;
