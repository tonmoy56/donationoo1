import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../../firebase/firebase.config';

export const MyAuthContext=createContext()

const AuthContext = ({children}) => {
    const auth=getAuth(app)

    const [user,setUser]=useState(null)

    const [loading,setLoading]=useState(true)


    useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth,(currentuser)=>{
            setUser(currentuser)
          

        })

        return ()=>{
            unsubscribe()
        }

        

    },[])
    

    const registration=(email,password)=>{
        setLoading(true)

        return createUserWithEmailAndPassword(auth,email,password)

    }


    const login=(email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }


    const logout=()=>{

        return signOut(auth)

    }
    const authInfo={registration,login,user,logout,loading}
    return (

        <MyAuthContext.Provider value={authInfo}>
            {children}

        </MyAuthContext.Provider>
      
    );
};

export default AuthContext;