import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { MyAuthContext } from '../Context/AuthContext/AuthContext';

const SelectedEvent = ({event}) => {
  const {user,loading}=useContext(MyAuthContext)
  // console.log(event._id)
  // const [counter, setCounter] = useState(1);

  if(loading){
    <h1>Loading...</h1>
  }
  const {_id,name,pic,price,email}=event
    const handleLog=(event)=>{
      
     
    


      

   
        const data={
          
          id:event._id,
          name:event.name,
          pic:event.picture,
          price:event.price,
          email:user?.email
    
      }
      // console.log(data)

    
    
   

  
       fetch('http://localhost:5000/create-event',{
        method:'POST',

        headers: {
            "Content-Type": "application/json",
           
          },

          body:JSON.stringify(data)


       })
       .then(res=>res.json())
       .then(newdata=>{
        if(newdata.acknowledged){
          toast.success('Event addedd')
        }
       })
       .catch((e)=>console.error(e))
      
            
    }
    
    return (
      

<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={event.picture} alt="pic" className="" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{event.name}</h2>

    <button onClick={()=>handleLog(event)} >BOOK Now</button>
    
   
    </div>
  </div>


           



            

          

  
    );
};

export default SelectedEvent;