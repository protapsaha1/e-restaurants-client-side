import { Outlet, useLocation } from "react-router-dom";
import Header from "../../pages/shared/Header/Header";
import Footer from "../../pages/shared/Footer/Footer";
// , useLocation
const Main = () => {
    const location = useLocation()
    // const withoutNavFoo = location.pathname.includes('/login') || location.pathname.includes('/registration');
    const fof = location.pathname.includes('*');
    return (
        <div className="w-[1920px] mx-auto">
            {fof || <Header />}
            <Outlet />
            {fof || <Footer />}
        </div>
    );
};

export default Main;