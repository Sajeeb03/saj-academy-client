import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from '../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const gitHubSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const logInWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }  
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current User inside state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => unSubscribe();

    }, [])
    const authInfo = {
        user,
        googleSignIn,
        gitHubSignIn,
        logOut,
        logInWithEmailPassword
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;