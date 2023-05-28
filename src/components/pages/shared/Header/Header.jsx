import { Link } from "react-router-dom";
import ActiveLink from "../../../ActiveLink/ActiveLink";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { UserAuthentication } from "../../../ContextUser/UserProvider";
import Swal from "sweetalert2";

const Header = () => {
    const { logOutUser, user } = useContext(UserAuthentication);

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successfully',
                })
            })
            .catch(() => { })
    }
    // hover:border-t-2 hover:border-r-2 hover:border-l-2 
    // hover:border-t-green-500 hover:border-r-rose-700 
    // hover:border-l-sky-700 hover:text-orange-400
    // hover:border-orange-400 border-b-4 border-white 


    const routeOptions = <>

        <li className="mx-2 text-2xl font-semibold text-white my-10 uppercase
        px-3 py-2 hover:text-orange-500"> <ActiveLink to="home">Home</ActiveLink></li>

        <li className="mx-2 text-2xl font-semibold text-white my-10 uppercase
        px-3 py-2 hover:text-orange-500"><ActiveLink to="/contact">Contacts Us</ActiveLink></li>

        <li className="mx-2 text-2xl font-semibold text-white my-10 uppercase
        px-3 py-2 hover:text-orange-500"> <ActiveLink to="/dashboard">DashBoard</ActiveLink></li>

        <li className="mx-2 text-2xl font-semibold text-white my-10 uppercase
        px-3 py-2 hover:text-orange-500"><ActiveLink to="/menu">Our Menu</ActiveLink></li>

        <li className="mx-2 text-2xl font-semibold text-white my-10 uppercase
        px-3 py-2 hover:text-orange-500"><ActiveLink to="/order/salad">Order Now</ActiveLink></li>
        {
            !user &&
            <li className="mx-2 text-2xl font-semibold text-white my-10 uppercase
            px-3 py-2 hover:text-orange-500"><ActiveLink to="/login">Login</ActiveLink></li>
        }
    </>
    return (
        <>
            <div className="navbar lg:justify-between bg-slate-900 h-[130px] fixed z-10 w-[1920px] mx-auto px-10 border border-pink-200 shadow-2xl  bg-opacity-60">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {routeOptions}
                        </ul>
                    </div>
                    <Link className="normal-case text-2xl text-white font-bold">Red Gold Sun <br />
                        <p className="text-xl font-semibold font-Cinzel">E-Restaurants</p>
                    </Link>
                </div>
                <div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {routeOptions}
                        </ul>
                    </div>
                    <div className="navbar-end ms-40 flex items-center">
                        {user ?
                            <button onClick={handleLogOut} className="
                            text-2xl font-semibold text-white 
                            my-10 uppercase hover:text-orange-500
                        "
                            >SignOut
                            </button>
                            :
                            ""
                        }
                        {
                            user ?
                                <img className="w-16 h-16 rounded-full ms-3" src={user?.photoURL} alt="" />
                                :
                                <FaUserCircle className="w-16 h-16 " />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;