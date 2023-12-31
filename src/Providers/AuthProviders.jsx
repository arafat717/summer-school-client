import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";


export const AuthContex = createContext(null);
const AuthProviders = ({ children }) => {
    const auth = getAuth(app);

    const googelProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const singin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const goggleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googelProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
            if (currentUser) {
                axios.post('https://summer-camp-school-server-wheat.vercel.app/jwt', { email: currentUser.email })
                    .then(data => {
                        // console.log(data.data.token)
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false)
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }

        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const authinfo = {
        user,
        loading,
        createUser,
        singin,
        logOut,
        goggleSignIn,
        updateUserProfile
    }
    return (
        <AuthContex.Provider value={authinfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProviders;