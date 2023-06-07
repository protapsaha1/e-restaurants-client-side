import { Link } from "react-router-dom";
import ActiveLink from "../../../ActiveLink/ActiveLink";
import { FaUserCircle, FaCartPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import useCart from "../../../CustomHook/useCart/useCart";
import useContexts from "../../../CustomHook/useContext/useContexts";

const Header = () => {
    const { logOutUser, user } = useContexts();
    const { cart } = useCart();

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Log Out Successfully',
                })
            })
            .catch(() => { })
    };

    const routeOptions = <>

        <li className="mr-1 text-3xl font-semibold text-white my-10 uppercase
        px-3 py-2 hover:text-orange-500 hover:border-b-4 hover:border-b-gray-400"><ActiveLink to="/">Home</ActiveLink></li>

        <li className="mr-1 text-3xl font-semibold text-white my-10 uppercase
        px-3 py-2 hover:text-orange-500 hover:border-b-4 hover:border-b-gray-400"><ActiveLink to="/contact">Contacts Us</ActiveLink></li>

        <li className="mr-1 text-3xl font-semibold text-white my-10 uppercase
        px-3 py-2 hover:text-orange-500 hover:border-b-4 hover:border-b-gray-400"> <ActiveLink to="/dashboard/user-home">DashBoard</ActiveLink></li>

        <li className="mr-1 text-3xl font-semibold text-white my-10 uppercase
        px-3 py-2 hover:text-orange-500 hover:border-b-4 hover:border-b-gray-400"><ActiveLink to="/menu">Our Menu</ActiveLink></li>

        <li className="mr-1 text-3xl font-semibold text-white my-10 uppercase
        px-3 py-2 hover:text-orange-500 hover:border-b-4 hover:border-b-gray-400"><ActiveLink to="/order/salad">Order Now</ActiveLink></li>
        {
            !user &&
            <li className="mr-1 text-3xl font-semibold text-white my-10 uppercase
            px-3 py-2 hover:text-orange-500 hover:border-b-4 hover:border-b-gray-400"><Link to="/login">Login</Link></li>
        }
        <li>
            <Link className="relative my-10 " to="/dashboard/my-cart">
                <FaCartPlus className="w-10 h-10 text-red-500" />
                <div className="text-xl bg-pink-600 rounded-2xl px-4 py-1 inline-flex absolute top-0 left-16 text-white ">+{cart?.length || 0}</div>
            </Link>
        </li>
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
                            text-3xl font-semibold text-white 
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