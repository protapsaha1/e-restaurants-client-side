import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layouts/Main/Main";
import Home from "../components/pages/Home/Home/Home";
import Menu from "../components/pages/Menu/Menu/Menu";
import Shop from "../components/pages/OurShop/Shop/Shop";
import Authentication from "../components/Layouts/Authentication/Authentication";
import Login from "../components/pages/Authentications/Login/Login";
import SignUp from "../components/pages/Authentications/SignUp/SignUp";
import Contact from "../components/pages/ContactUs/Contact/Contact";
import PrivateRoute from "../components/UserAccessOnly/PrivateRoute";
import DashBoard from "../components/Layouts/DashBoard/DashBoard";
import MyCarts from "../components/pages/Dashboard/Users/MyCarts/MyCarts";
import PayHistory from "../components/pages/Dashboard/Users/PayHistory/PayHistory";
import Reservation from "../components/pages/Dashboard/Users/Reservation/Reservation";
import AddReviews from "../components/pages/Dashboard/Users/AddReviews/AddReviews";
import MyBookings from "../components/pages/Dashboard/Users/MyBookings/MyBookings";
import UserHome from "../components/pages/Dashboard/Users/UserHome/UserHome";
import ErrorPage from "../components/pages/ErrorPage/ErrorPage";
import AdminHome from "../components/pages/Dashboard/Admin/AdminHome/AdminHome";
import AddItems from "../components/pages/Dashboard/Admin/AddItems/AddItems";
import ManageItems from "../components/pages/Dashboard/Admin/ManageItems/ManageItems";
import ManageBookings from "../components/pages/Dashboard/Admin/ManageBookings/ManageBookings";
import AllUsers from "../components/pages/Dashboard/Admin/AllUsers/AllUsers";
// import EntryLogin from "../components/EntryPage/EntryLogin";
// import Spinner from "../components/Spinner/Spinner";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '*',
                element: <ErrorPage />
            },
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'menu',
                element: <PrivateRoute><Menu /></PrivateRoute>
            },
            {
                path: 'order/:category',
                element: <Shop />
            },
            {
                path: 'contact',
                element: <Contact />
            }
        ]
    },
    {
        path: '/',
        element: <Authentication />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'registration',
                element: <SignUp />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute> <DashBoard /></PrivateRoute>,
        children: [
            {
                path: 'user-home',
                element: <UserHome />
            },
            {
                path: 'my-cart',
                element: <MyCarts />
            },
            {
                path: 'pay-history',
                element: <PayHistory />
            },
            {
                path: 'reservation',
                element: <Reservation />
            },
            {
                path: 'review',
                element: <AddReviews />

            },
            {
                path: 'booking',
                element: <MyBookings />
            },
            // Admin route
            {
                path: 'admin-home',
                element: <AdminHome />
            },
            {
                path: 'add-items',
                element: <AddItems />
            },
            {
                path: 'manage-items',
                element: <ManageItems />
            },
            {
                path: 'manage-bookings',
                element: <ManageBookings />
            },
            {
                path: 'users',
                element: <AllUsers />
            }
        ]
    },

]);

export default router; 