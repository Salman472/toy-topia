import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import UserLoading from '../loading/UserLoading';

const PrivateRoute = ({children}) => {
    const {user,loading}=use(AuthContext)
    const location=useLocation()
    // console.log(location);
    // console.log(user);
    if(loading){
        return <div className='flex justify-center items-center min-h-screen'><UserLoading/></div>
    }
    if(!user){
        return <Navigate  to={'/login'} state={location.pathname}/>
    }
    return children
};

export default PrivateRoute;