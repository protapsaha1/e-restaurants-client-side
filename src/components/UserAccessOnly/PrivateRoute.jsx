import { useContext } from "react";
import { UserAuthentication } from "../ContextUser/UserProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(UserAuthentication);
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