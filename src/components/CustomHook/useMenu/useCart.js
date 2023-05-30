import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { UserAuthentication } from '../../ContextUser/UserProvider';

const useCart = () => {
    const { user } = useContext(UserAuthentication);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5011/carts?email=${user?.email}`)
            return response.json();
        },
    })
    return [cart, refetch]
}

export default useCart;