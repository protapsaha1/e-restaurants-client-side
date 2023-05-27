import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
    return (
        <div>
            <NavLink to={to} className={({ isActive }) =>
                isActive ?
                    "border-b-8 mb-10 border-sky-400"
                    :
                    ""
            }>
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLink;