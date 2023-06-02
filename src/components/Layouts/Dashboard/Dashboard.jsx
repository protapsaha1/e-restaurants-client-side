import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart, FaWallet, FaCalendarAlt, FaBars, FaShoppingBag, FaEnvelope, FaListUl, FaBook, FaUsers, FaStarHalfAlt } from 'react-icons/fa'
import { GiForkKnifeSpoon } from 'react-icons/gi'


const DashBoard = () => {
    // TODO
    const isAdmin = true;
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center bg-slate-50 ">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-[500px] text-base-content bg-yellow-600 pt-10">

                    {
                        isAdmin ?
                            <>
                                <li><NavLink to="/dashboard/admin-home" className="flex items-center font-serif text-2xl font-bold text-black"><FaHome className="w-9 h-9" /> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/add-items" className="flex items-center font-serif text-2xl font-bold text-black"><GiForkKnifeSpoon className="w-9 h-9" />Add Items</NavLink></li>
                                <li><NavLink to="/dashboard/manage-items" className="flex items-center font-serif text-2xl font-bold text-black"><FaListUl className="w-9 h-9" />Manage Items</NavLink></li>
                                <li><NavLink to="/dashboard/manage-bookings" className="flex items-center font-serif text-2xl font-bold text-black"><FaBook className="w-9 h-9" />Manage Bookings</NavLink></li>
                                <li><NavLink to="/dashboard/users" className="flex items-center font-serif text-2xl font-bold text-black"><FaUsers className="w-9 h-9" />All Users</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to="/dashboard/user-home" className="flex items-center font-serif text-2xl font-bold text-black"><FaHome className="w-9 h-9" /> User Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservation" className="flex items-center font-serif text-2xl font-bold text-black"><FaCalendarAlt className="w-9 h-9" /> Reservation</NavLink></li>
                                <li><NavLink to="/dashboard/pay-history" className="flex items-center font-serif text-2xl font-bold text-black"><FaWallet className="w-9 h-9" /> Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/review" className="flex items-center font-serif text-2xl font-bold text-black"><FaStarHalfAlt className="w-9 h-9" />Add Reviews</NavLink></li>
                                <li><NavLink to="/dashboard/my-cart" className="flex items-center font-serif text-2xl font-bold text-black"><FaShoppingCart className="w-9 h-9" /> My Cart</NavLink></li>
                            </>
                    }

                    <hr className="my-10" />
                    <li><NavLink to="/" className="flex items-center font-serif text-2xl font-bold text-black"><FaHome className="w-9 h-9" /> Home</NavLink></li>
                    <li><NavLink to="/menu" className="flex items-center font-serif text-2xl font-bold text-black"><FaBars className="w-9 h-9" /> Menu</NavLink></li>
                    <li><NavLink to="/order/salad" className="flex items-center font-serif text-2xl font-bold text-black"><FaShoppingBag className="w-9 h-9" /> Order Now</NavLink></li>
                    <li><NavLink to="/contact" className="flex items-center font-serif text-2xl font-bold text-black"><FaEnvelope className="w-9 h-9" /> Contact</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;