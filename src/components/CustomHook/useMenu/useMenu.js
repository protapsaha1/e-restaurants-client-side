import { useQuery } from '@tanstack/react-query';
// import { useEffect, useState } from 'react';

const useMenu = () => {
    // const [menu, setMenus] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5011/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setLoading(false)
    //             setMenus(data)
    //         })
    // }, [])

    const { data: menu, isLoading: loading } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5011/menu')
            // try {
            return res.json();
            // } catch (err) {
            //     console.error(err);
            // }
        }

    });
    return { menu, loading };
};

export default useMenu;