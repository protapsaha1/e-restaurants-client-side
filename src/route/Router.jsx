import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layouts/Main/Main";
import Home from "../components/pages/Home/Home/Home";
import Menu from "../components/pages/Menu/Menu/Menu";
import Shop from "../components/pages/OurShop/Shop/Shop";

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
    }
]);

export default router; 