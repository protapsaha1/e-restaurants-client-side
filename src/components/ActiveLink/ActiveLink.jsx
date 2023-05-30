import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
    return (
        <div>
            <NavLink to={to} className={({ isActive }) =>

                isActive
                    ?
                    "border-b-4 border-b-red-500"
                    :
                    ""
            }>
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLink;