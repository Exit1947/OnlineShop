import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import {backendUrl} from '../../environments.ts';
import logoPage from '../../img/Group 1474.png';
import './loginStyle.css'

type FormValues = {
    email: string,
    password: string,
    name: string
}

const LoginPage = () => {
    const [loginError, setLoginError] = useState<boolean>(false);
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>();
    const navigate = useNavigate();

    //const { setToken } = useContext(AuthContext);

    function onSubmit(data: FormValues) {
        const url = `${backendUrl}auth/login`;
        const body = {
            email: data.email,
            password: data.password
        };

        axios.post(url, body)
            .then(({data}) => {
                //setToken(data.token, data.expiresIn)
                navigate('/');
            })
            .catch(({response}) => {
                if (response.status === 401) {
                    setLoginError(true);
                } else {
                    toast.error('Something went wrong!');
                }
            });
    }

    function onClick(event) {
        event.preventDefault();
        navigate('/', { replace: true });
    }

    function onClickCreateAccount(event) {
        event.preventDefault();
        navigate('/auth/registration', { replace: true });
    }

    return (

        <div className="login-container">
            <div className='logo-box'>
                <div className='top-box'>
                    <div className='box-image'>
                        <img src={logoPage} alt="" className='paint'/>
                    </div>

                    <div className='boxes'>
                        <div className='box-title'>
                            <div className='sign'><strong>Sign in</strong></div>
                        </div>

                        <div className='box-input'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label htmlFor="email"><strong>Email</strong></label>
                                <input type="text" id='email' placeholder="" className="input-email10"
                                       {...register('email', {required: 'Enter your email'})}
                                />
                                <div className='between10'></div>
                                <label htmlFor="password"><strong>Password</strong></label>
                                <input type="password" id='password' placeholder="" className="input-password10"
                                       {...register('password', {required: 'Enter your password'})}
                                />
                                <div className='between10'></div>

                                <button type='submit' onClick={onClick} className="btn-confirm10"><strong>Login</strong></button>
                            </form>
                        </div>
                    </div>

                    <div className='newOmnify'>
                        <hr className='line-under'></hr>
                        <div className='new-omnify'>New to Omnify?</div>
                        <hr className='line-after'></hr>
                    </div>

                    <button type="submit"  onClick={onClickCreateAccount} className="btn-create-account"><strong>Create your Omnify account</strong></button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
