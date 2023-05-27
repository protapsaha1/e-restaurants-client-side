import { Link } from "react-router-dom";
import ActiveLink from "../../../ActiveLink/ActiveLink";

const Header = () => {
    const routeOptions = <>
        <ActiveLink to="/"><li className="mx-2 border-b-4 border-white
        text-2xl font-semibold text-white bg-transparent
        rounded-lg my-10 uppercase px-3 py-2 hover:border-t-2
        hover:border-r-2 hover:border-l-2 hover:border-t-green-500
      hover:border-r-rose-700 hover:border-l-sky-700"
        >Home</li></ActiveLink>
        <ActiveLink to="/contact"><li className="mx-2 border-b-4 border-white
        text-2xl font-semibold text-white bg-transparent
        rounded-lg my-10 uppercase px-3 py-2 hover:border-t-2
        hover:border-r-2 hover:border-l-2 hover:border-t-green-500
      hover:border-r-rose-700 hover:border-l-sky-700">Contacts Us</li></ActiveLink>
        <ActiveLink to="/dashboard"><li className="mx-2 border-b-4 border-white
        text-2xl font-semibold text-white bg-transparent
        rounded-lg my-10 uppercase px-3 py-2 hover:border-t-2
        hover:border-r-2 hover:border-l-2 hover:border-t-green-500
      hover:border-r-rose-700 hover:border-l-sky-700">DashBoard</li></ActiveLink>
        <ActiveLink to="/menu"><li className="mx-2 border-b-4 border-white
        text-2xl font-semibold text-white bg-transparent
        rounded-lg my-10 uppercase px-3 py-2 hover:border-t-2
        hover:border-r-2 hover:border-l-2 hover:border-t-green-500
      hover:border-r-rose-700 hover:border-l-sky-700">Our Menu</li></ActiveLink>
        <ActiveLink to="/order/category"><li className="mx-2 border-b-4 border-white
        text-2xl font-semibold text-white bg-transparent
        rounded-lg my-10 uppercase px-3 py-2 hover:border-t-2
        hover:border-r-2 hover:border-l-2 hover:border-t-green-500
      hover:border-r-rose-700 hover:border-l-sky-700">Order Now</li></ActiveLink>
    </>
    return (
        <>
            <div className="navbar lg:justify-between bg-transparent h-[130px] fixed z-10 w-[1920px] mx-auto px-10 border border-pink-200 shadow-2xl bg-gradient-to-r from-slate-900 bg-opacity-60">
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
                    <div className="navbar-end ms-40">
                        <button className="btn btn-ghost
                         text-white text-xl btn-active 
                        bg-gradient-to-t from-slate-900 
                        hover:border-2 hover:border-white
                        shadow-2xl"
                        >SignOut
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;