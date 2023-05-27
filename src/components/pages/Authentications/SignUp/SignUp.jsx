import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import signUp from '../../../../assets/others/authentication2.png';

const SignUp = () => {
    return (
        <div className="loginBg h-full py-32">
            <div className=' loginBg w-[1700px] h-[950px] mx-auto drop-shadow-2xl flex items-center'>
                <div className='w-1/2'>
                    <div className='w-[536px] mx-auto'>
                        <h1 className='text-center text-6xl text-slate-800 font-bold my-10'>Sign Up</h1>
                        <form>
                            <div>
                                <label>
                                    <span className='text-2xl font-bold text-slate-600 '>Name</span>
                                </label>
                                <br />
                                <input className='w-[536px] h-[72px] bg-white ps-5 text-2xl text-slate-950 my-5' type="text" placeholder='Enter Your Name' name="name" id="name" required />
                            </div>
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
                            <input className='w-[536px] h-[72px] bg-orange-300 ps-5 text-2xl my-5 rounded-lg text-white font-bold ' type="submit" value="Sign in" />
                        </form>
                        <p className='text-2xl font-bold text-orange-200 text-center mb-5'>Already registered? <Link to="/login"><span className='hover:underline'>Go to log in</span></Link></p>
                        <p className='text-xl text-slate-700 text-center'>or sign in with</p>
                        <div>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img className='mx-auto w-full' src={signUp} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;