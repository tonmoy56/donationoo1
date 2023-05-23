
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import NewMember from '../NewMember/NewMember';

const RegisterMember = () => {
    const [memebers,setMember]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/newmember')
        .then(res=>res.json())
        .then(data=>setMember(data))
        
    },[])




    const handleDelete=(id)=>{

      fetch(`http://localhost:5000/newmember/${id}`,{
        method:'DELETE',
        headers: {
          "Content-Type": "application/json",
         
        }
        
      })
      .then(res=>res.json())
        .then(data=>console.log(data))
      
        
      
    }


    
    return (
    


        <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Joining Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
                memebers.map(member=><NewMember member={member} handleDelete={handleDelete} ></NewMember>)
            }
           
           
          </tbody>
        </table>
      </div>
            
        
    );
};

export default RegisterMember;


