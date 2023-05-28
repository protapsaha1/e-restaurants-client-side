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
// import EntryLogin from "../components/EntryPage/EntryLogin";
// import Spinner from "../components/Spinner/Spinner";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            // {
            //     path: '/',
            //     element: <EntryLogin />
            // },
            {
                path: 'home',
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
            // {
            //     path: 'spinner',
            //     element: <Spinner />
            // }
        ]
    }
]);

export default router; 