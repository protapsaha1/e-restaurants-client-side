import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../../assets/others/authentication2.png';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import useContexts from '../../../CustomHook/useContext/useContexts';


const Login = () => {
    const { signInUser } = useContexts();
    const [disabled, setDisabled] = useState(true);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const message = form.message.value;

        console.log(password, email)

        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
                Swal.fire({
                    icon: 'success',
                    showConfirmButton: false,
                    title: 'Login Successfully'
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })
    };

    const handleValidateCaptcha = e => {
        const captcha_Value = e.target.value;
        if (validateCaptcha(captcha_Value, false) == true) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <>
            <Helmet>
                <title>Login || Red Gold Restaurants</title>
            </Helmet>
            <div className="loginBg h-full py-32">
                <div className=' loginBg w-[1700px] h-[1000px] mx-auto drop-shadow-2xl flex items-center'>
                    <div className='w-1/2'>
                        <img className='w-full mx-auto' src={login} alt="" />
                    </div>
                    <div className='w-1/2'>
                        <div className='w-[536px] mx-auto'>
                            <h1 className='text-center text-6xl text-slate-800 font-bold my-10'>Login</h1>
                            <form onSubmit={handleLogin}>
                                <div>
                                    <label>
                                        <span className='text-2xl font-bold text-slate-600 '>Email</span>
                                    </label>
                                    <br />
                                    <input className='w-[536px] h-[72px] bg-white ps-5 text-2xl text-slate-950 my-5' type="email" placeholder='Enter Your Email' name="email" id="email" required />
                                </div>
                                <div>
                                    <label>
                                        <span className='text-2xl font-bold text-slate-600 '>Password</span>
                                    </label>
                                    <br />
                                    <label className='flex items-center '>
                                        <input className='w-[536px] h-[72px] bg-white ps-5 text-2xl text-slate-950 my-5' type={show ? "text" : "password"} placeholder='Enter Your Password' name="password" id="password" required />
                                        <span className='bg-slate-600 h-[72px] w-20 p-4' onClick={() => setShow(!show)}>
                                            {show ?
                                                <FaRegEye className='w-10 h-10 text-white' />
                                                :
                                                <FaRegEyeSlash className='w-10 h-10 text-white' />
                                            }
                                        </span>
                                    </label>
                                </div>
                                <div>
                                    <input onBlur={handleValidateCaptcha} className='w-[536px] h-[72px] bg-white ps-5 text-2xl text-slate-950 mt-5 mb-3' type="text" placeholder='captcha' name="captcha" id="captcha" required />
                                    <div className='text-blue-500 text-2xl font-bold h-5 mb-10 '>
                                        <LoadCanvasTemplate />
                                    </div>
                                </div>
                                <input className="w-[536px] h-[72px] bg-orange-300 ps-5 text-2xl mt-5 mb-3 rounded-lg text-white font-bold hover:bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 disabled:blur-sm disabled:bg-orange-500" disabled={disabled} type="submit" value="Sign in" />
                            </form>
                            <p className='text-2xl font-bold text-orange-200 text-center mb-2'>New here? <Link to="/registration"><span className='hover:underline hover:text-orange-400'>Create a New Account</span></Link></p>
                            <p className='text-xl text-slate-700 text-center'>or sign in with</p>
                            <div>
                                <SocialLogin />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;