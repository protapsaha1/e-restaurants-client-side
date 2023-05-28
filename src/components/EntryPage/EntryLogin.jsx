import { Link } from "react-router-dom";

const EntryLogin = () => {
    return (
        <div className="flex items-center justify-center">
            <Link className="btn btn-outline btn-secondary mr-3" to="/login">Login</Link>
            <Link className="btn btn-outline btn-secondary" to="/registration">Sign Up</Link>
        </div>
    );
};

export default EntryLogin;