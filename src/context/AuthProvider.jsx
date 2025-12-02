import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    
    // console.log(user,loading);

    // create user
    const signUpUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // update user
    const updateUser=(updateData)=>{
        return updateProfile(auth.currentUser,updateData)

    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    // sign in user
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // google sign in
    const googleProvider=new GoogleAuthProvider()
    const googleUser=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    // sign out user
    const userLogOut=()=>{
        return signOut(auth)

    }
    // reset password
    const resetPassword=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }
    
    const userInfo={
        signUpUser,
        user,
        setUser,
        signInUser,
        userLogOut,
        loading,
        setLoading,
        googleUser,
        updateUser,
        resetPassword,
    }
    return <AuthContext value={userInfo}>{children}</AuthContext>
};

export default AuthProvider;