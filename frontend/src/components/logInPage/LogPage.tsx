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
                <div className='sign'><strong>Sign in</strong></div>
                 </div>

            <div className='box-input'>            
            <form action="" method="get" >
                <label><strong>Email or mobile phone number</strong></label>
                <input type="text" placeholder="" className="input-number"/>
                <div className='between'></div>
                <label><strong>Password</strong></label>
                <input type="password" placeholder="" className="input-password"/>
                <div className='between'></div>                
                
                <button type="submit" className="btn-confirm"><strong>Login</strong></button>
            </form>
            </div>

            </div>

            <div className='newOmnify'>
                <hr className='line-under'></hr>
                <div className='new-omnify'>New to Omnify?</div>
                <hr className='line-after'></hr>
            </div>

            <button type="submit" className="btn-create-account"><strong>Create your Omnify account</strong></button>
            </div>
            </div>
        </div>
    )
}


export default LoginPage;
