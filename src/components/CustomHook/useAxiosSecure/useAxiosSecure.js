import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useContexts from "../useContext/useContexts";

const useAxiosSecure = () => {
    const { logOutUser } = useContexts();
    const navigate = useNavigate();

    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5011'
    });

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `bearer ${token}`;
            }
            return config;
        })

        axiosSecure.interceptors.response.use(
            response => response,
            async (error) => {
                if (error.response && error.response.status === 401 || error.response.status === 403) {
                    await logOutUser();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        )
    }, [logOutUser, navigate, axiosSecure])
    return { axiosSecure };
};

export default useAxiosSecure;