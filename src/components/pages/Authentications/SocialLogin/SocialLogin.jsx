import { useContext } from "react";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { UserAuthentication } from "../../../ContextUser/UserProvider";
import Swal from "sweetalert2";


const SocialLogin = () => {
    const { googleLogin, githubLogin, facebookLogin, } = useContext(UserAuthentication);
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Login with Google Successfully',
                    timer: 1500
                })

            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Login Github Successfully',
                    timer: 1500
                })
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleFacebookLogin = () => {
        facebookLogin()
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Login Facebook Successfully',
                    timer: 1500
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