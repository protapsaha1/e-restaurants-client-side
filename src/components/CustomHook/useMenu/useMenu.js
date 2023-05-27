import { useEffect, useState } from 'react';

const useMenu = () => {
    const [menu, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('/public/menu.json')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setMenus(data)
            })
    }, [])
    return [menu, loading]
};

export default useMenu;