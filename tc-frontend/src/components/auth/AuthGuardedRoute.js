import React from 'react'
import {useSelector} from "react-redux"
import { Navigate, useLocation } from "react-router-dom";

const AuthGuardedRoute = ({ children }) => {
    const user = useSelector((state) => {
        return state.user.user
    });
    let location = useLocation();

    if(!user.isAuthenticated) {
        return <Navigate to="/login" state={{ from: location}} replace/>
    }
 return children

};


export default AuthGuardedRoute
