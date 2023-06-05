import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useContexts from "../../../CustomHook/useContext/useContexts";


const SocialLogin = () => {
    const { googleLogin, githubLogin, facebookLogin, } = useContexts();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(result.user.displayName, result.user.email, result.user.photoURL)
                const usersData = { name: loggedUser.displayName, email: loggedUser.email, UserPhoto: loggedUser.photoURL }
                fetch('http://localhost:5011/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(usersData)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Login with Google Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate(from, { replace: true })
                    })
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(result.user)
                const usersData = { name: loggedUser.displayName, email: loggedUser.email, UserPhoto: loggedUser.photoURL }
                fetch('http://localhost:5011/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(usersData)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Login with Google Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate(from, { replace: true })


                    })
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleFacebookLogin = () => {
        facebookLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(result.user)
                const usersData = { name: loggedUser.displayName, email: loggedUser.email, UserPhoto: loggedUser.photoURL }
                fetch('http://localhost:5011/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(usersData)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Login with Google Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate(from, { replace: true })
                    })
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="flex items-center justify-center pb- pt-2">
            <button onClick={handleFacebookLogin} className="btn btn-circle btn-outline w-16 h-16 mx-3 ">
                <FaFacebookF className="w-7 h-7 " />
            </button>
            <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline w-16 h-16 mx-3">
                <FaGoogle className="w-7 h-7 " />
            </button>
            <button onClick={handleGithubLogin} className="btn btn-circle btn-outline w-16 h-16 border mx-3">
                <FaGithub className="w-7 h-7 " />
            </button>
        </div>
    );
};

export default SocialLogin;