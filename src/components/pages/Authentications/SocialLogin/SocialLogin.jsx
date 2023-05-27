import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div className="flex items-center justify-center mb-11 mt-5">
            <button className="btn btn-circle btn-outline mx-3 ">
                <FaFacebookF className="w-7 h-7 " />
            </button>
            <button className="btn btn-circle btn-outline mx-3">
                <FaGoogle className="w-7 h-7 " />
            </button>
            <button className="btn btn-circle btn-outline mx-3">
                <FaGithub className="w-7 h-7 " />
            </button>
        </div>
    );
};

export default SocialLogin;