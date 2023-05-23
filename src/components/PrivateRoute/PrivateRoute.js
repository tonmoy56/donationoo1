import React, { useContext } from 'react';
import { MyAuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(MyAuthContext)
    let loaction=useLocation()

    if(loading){
      <h1>Loading ...</h1>
    }


    if (!user) {
        return <Navigate to='/login' state={{ from: loaction }} replace></Navigate> ;
      }

      return children;
    }
export default PrivateRoute;