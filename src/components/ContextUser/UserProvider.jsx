import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
export const UserAuthentication = createContext(null);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    };

    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    };

    const facebookLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider);
    };

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loginUser => {
            setUser(loginUser);
            if (loginUser) {
                axios.post('http://localhost:5011/jwt', {
                    email: loginUser.email
                })
                    .then(data => {
                        // TODO COOKIES
                        // document.cookie('access-token',data.data.token)
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false);
                    })
                    .catch(err => console.log(err))
            }
            else {
                localStorage.removeItem('access-token')
            }
        })
        return () => {
            unsubscribe();
        }
    }, []);

    const userInfo = {
        user,
        loading,
        googleLogin,
        githubLogin,
        facebookLogin,
        createUser,
        signInUser,
        updateUser,
        logOutUser
    };

    return (
        <UserAuthentication.Provider value={userInfo}>
            {children}
        </UserAuthentication.Provider>
    );
};

export default UserProvider;