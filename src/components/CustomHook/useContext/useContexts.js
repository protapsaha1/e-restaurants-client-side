import { useContext } from "react";
import { UserAuthentication } from "../../ContextUser/UserProvider";
const useContexts = () => {
    const context = useContext(UserAuthentication);
    return context;
}

export default useContexts;