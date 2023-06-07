import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../CustomHook/useAdmin/useAdmin";
import useContexts from "../CustomHook/useContext/useContexts";
import Spinner from "../Spinner/Spinner";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContexts();
    const { isAdmin, adminLoading } = useAdmin();
    const location = useLocation();
    if (loading || adminLoading) {
        return <Spinner />
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace />
};

export default AdminRoute;