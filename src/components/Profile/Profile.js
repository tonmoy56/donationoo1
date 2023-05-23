import React, { useContext, useEffect, useState,  } from 'react';
import { MyAuthContext } from '../Context/AuthContext/AuthContext';
import ProfileData from '../ProfileData/ProfileData';

const Profile = () => {
    const {user}=useContext(MyAuthContext)
    // console.log(user)
    const[addevent,setEvent]=useState([])
    // console.log(localStorage.getItem('token'))
    useEffect(()=>{
        fetch(`http://localhost:5000/adedevent?email=${user?.email}`,{
            
            headers:{
                authorization:`Bearer ${localStorage.getItem('token')}`
            }

          
        })
        .then(res=>res.json())
        .then(data=>setEvent(data))
    },[user?.email])
 
    return (
        <div className='grid grid-cols-2 gap-1'>
            
            {
                addevent.map(eventdata=><ProfileData eventdata={eventdata}></ProfileData>)
            }
        </div>
    );
};

export default Profile;