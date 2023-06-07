import { useQuery } from '@tanstack/react-query';
import useContexts from '../useContext/useContexts';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';

const useCart = () => {
    const { user, loading } = useContexts();
    const { axiosSecure } = useAxiosSecure();
    // console.log(axiosSecure)
    // const token = localStorage.getItem('access-token');
    // const { refetch, data: cart = [] } = useQuery({
    //     queryKey: ['carts', user?.email],
    //     queryFn: async () => {
    //         const response = await fetch(`http://localhost:5011/carts?email=${user?.email}`, {
    //             headers: { authorization: `bearer ${token}` }
    //         })
    //         return response.json();
    //     },
    // })
    // return [cart, refetch]
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data;
        },
    })
    return { cart, refetch };
}

export default useCart;