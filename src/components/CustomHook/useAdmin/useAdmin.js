import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import useContexts from "../useContext/useContexts";

const useAdmin = () => {
    const { user } = useContexts();
    const { axiosSecure } = useAxiosSecure();
    const { data: isAdmin, isLoading: adminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log('resgo', res)
            return res.data.admin;
        }
    })
    console.log(isAdmin)
    return { isAdmin, adminLoading };

};
export default useAdmin;