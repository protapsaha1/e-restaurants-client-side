import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import useContexts from "../CustomHook/useContext/useContexts";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContexts();
    const location = useLocation();
    if (loading) {
        return <Spinner />
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;