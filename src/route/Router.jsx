import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layouts/Main/Main";
import Home from "../components/pages/Home/Home/Home";
import Menu from "../components/pages/Menu/Menu/Menu";
import Shop from "../components/pages/OurShop/Shop/Shop";
import Authentication from "../components/Layouts/Authentication/Authentication";
import Login from "../components/pages/Authentications/Login/Login";
import SignUp from "../components/pages/Authentications/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'order/:category',
                element: <Shop />
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
    }
]);

export default router; 