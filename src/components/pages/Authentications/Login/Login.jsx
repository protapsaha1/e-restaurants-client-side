import { Link } from 'react-router-dom';
import login from '../../../../assets/others/authentication2.png';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';


const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const message = form.message.value;
        console.log(password, email, message)
        // captcha not done
    }

    return (
        <div className="loginBg h-full py-32">
            <div className=' loginBg w-[1700px] h-[950px] mx-auto drop-shadow-2xl flex items-center'>
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
                                <input className='w-[536px] h-[72px] bg-white ps-5 text-2xl text-slate-950 my-5' type="password" placeholder='Enter Your Password' name="password" id="password" required />
                            </div>
                            <div>
                                <input className='w-[536px] h-[72px] bg-white ps-5 text-2xl text-slate-950 mt-5 mb-3' type="email" placeholder='Enter Your Email' name="email" id="captcha" required />
                                <p className='text-blue-500 text-2xl font-bold '>reload captcha</p>
                            </div>
                            <div>
                                <textarea className='w-[536px] h-[72px] bg-white ps-5 text-2xl text-slate-950 my-5' type="text" placeholder='Type Here' name="message" id="message" required />
                            </div>
                            <input className='w-[536px] h-[72px] bg-orange-300 ps-5 text-2xl my-5 rounded-lg text-white font-bold ' type="submit" value="Sign in" />
                        </form>
                        <p className='text-2xl font-bold text-orange-200 text-center mb-5'>New here? <Link to="/registration"><span className='hover:underline'>Create a New Account</span></Link></p>
                        <p className='text-xl text-slate-700 text-center'>or sign in with</p>
                        <div>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;