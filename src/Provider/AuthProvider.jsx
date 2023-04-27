/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase.config';


export const AuthCotext =createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const AuthInfo ={

    }
    return (
        <AuthCotext.Provider value={AuthInfo}>
            {children}
        </AuthCotext.Provider>
    );
};

export default AuthProvider;