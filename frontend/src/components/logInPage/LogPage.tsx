import  './loginStyle.css'
import logoPage from '../../img/Group 1474.png';



const LoginPage =()=>{

    return (

        <div className="login-container">
             
            <div className='logo-box'>

                <div className='box-image'  >
                <img src={logoPage} alt="" className='paint' ></img>
                </div>


                <div className='boxes'>


                <div className='box-title'>            
                <h1>Sign in</h1>
                 </div>

            <div className='box-input'>            
            <form>
                <label><strong>Email or mobile phone number</strong></label>
                <input type="text" placeholder="" className="input-number"/>
                <div className='between'></div>
                <label>Password</label>
                <input type="password" placeholder="" className="input-password"/>
                <div className='between'></div>                
                
                <button type="submit" className="btn-confirm">Login</button>
            </form>
            </div>
            </div>
            </div>
        </div>
    )
}


export default LoginPage;
