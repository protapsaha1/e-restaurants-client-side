import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import signUp from '../../../../assets/others/authentication2.png';
import { useContext, useState } from "react";
import { UserAuthentication } from "../../../ContextUser/UserProvider";
import Swal from "sweetalert2";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
    const { createUser, updateUser } = useContext(UserAuthentication);
    const [show, setShow] = useState(false);
    const [error, setError] = useState("")
    const navigate = useNavigate();


    const handleRegistration = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const usersData = { name: name, email: email, UserPhoto: photo }
        console.log(password, email, name, photo)

        if (password.length >= 6 || password.length <= 20) {
            setError("please your password max 20 or min 6 character")
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUser(name, photo)
                    .then(result => {
                        console.log(result.user)
                        // send users data in mongo
                        fetch('http://localhost:5011/users', {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(usersData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)
                                if (data.insertedId) {
                                    form.reset();
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Sign up Successfully'
                                    })

                                    navigate('/')
                                }
                            })


                    })
                    .catch(error => {
                        console.log(error.message)
                    })

            })
            .catch(error => {
                console.log(error.message)
            })




    }

    return (
        <>
            <Helmet>
                <title>Register || Red Gold Restaurants</title>
            </Helmet>
            <div className="loginBg h-full py-32">
                <div className=' loginBg w-[1700px] h-[1000px]  mx-auto drop-shadow-2xl flex items-center'>
                    <div className='w-1/2'>
                        <div className='w-[536px] mx-auto'>
                            <h1 className='text-center text-6xl text-slate-800 font-bold my-10'>Sign Up</h1>
                            <form onSubmit={handleRegistration}>
                                <div>
                                    <label>
                                        <span className='text-2xl font-bold text-slate-600 '>Name</span>
                                    </label>
                                    <br />
                                    <input className='w-[536px] h-[72px] bg-white ps-5 text-2xl text-slate-950 my-5' type="text" placeholder='Enter Your Name' name="name" id="name" required />
                                </div>
                                <div>
                                    <label>
                                        <span className='text-2xl font-bold text-slate-600 '>Photo Url</span>
                                    </label>
                                    <br />
                                    <input className='w-[536px] h-[72px] bg-white ps-5 text-2xl text-slate-950 my-5' type="text" placeholder='Enter Your Name' name="photo" id="photo" required />
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
                                    <p className="text-red-500 text-xl font-semibold">{error}</p>
                                </div>
                                <input className='w-[536px] h-[72px] bg-orange-300 ps-5 text-2xl my-3 rounded-lg text-white font-bold hover:bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500' type="submit" value="Sign in" />
                            </form>
                            <p className='text-2xl font-bold text-orange-200 text-center mb-2'>Already registered? <Link to="/login"><span className='hover:underline hover:text-orange-400'>Go to login</span></Link></p>
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
        </>
    );
};

export default SignUp;