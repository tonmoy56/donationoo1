import React, { Children } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Shared/Main/Main';
import Home from '../components/Home/Home'
import Events from '../components/Events/Events';
import SelectedEvent from '../components/SelectedEvent/SelectedEvent';
import Registration from '../components/Registration/Registration';
import Login from '../components/Login/Login';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import Profile from '../components/Profile/Profile';
import Volunterr from '../components/Volunterr/Volunterr';
import Member from '../components/Member/Member';
// import Date from '../components/Date/Date';
import RegisterMember from '../components/RegisterMember/RegisterMember';
import NewMember from '../components/NewMember/NewMember';
import Update from '../components/Update/Update';


 export const router=createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>

            },
            
            {
                path:'/events',
                element:<PrivateRoute><Events></Events></PrivateRoute>
            },
            {
                path:'/selectedEvent',
                element:<SelectedEvent></SelectedEvent>
            },
            {
                path:'/registration',

                element:<Registration></Registration>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },

            {
                path:'/volunter',
                element:<Volunterr></Volunterr>
            },

            {
                path:'/member',
                element:<Member></Member>
            },
            {
                path:'/registermember',
                element:<RegisterMember></RegisterMember>
            },
            {
                path:'/newmember',
                element:<NewMember></NewMember>
            },
            {
                path:'/update/:id',

                element:<Update></Update>,
                loader:({params})=>fetch(`http://localhost:5000/newmember/${params.id}`)
            }
           
        ]
    },
    
])

