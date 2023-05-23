import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const newmember=useLoaderData()
    // console.log(newmember)

    const [user,setUser]=useState(newmember)

  
    
 
    
    const handleUpdate=(event)=>{
      event.preventDefault()
      console.log(user)


        fetch(`http://localhost:5000/member/${newmember._id}`,{
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user)
    
          
        

          
  
  
        })

        .then(res=>res.json())
        .then(data=>console.log(data))
     
      }


      const fromHandleler=(event)=>{

        event.preventDefault()

        const field=event.target.name
        const neValue=event.target.value
        
        const newuser={...user}
        newuser[field]=neValue
        setUser(newuser)
        
            
    

        


      
        
        
        

      }
      // console.log(user)

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleUpdate}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input onChange={fromHandleler} type="text" name='name' placeholder="Name" defaultValue={newmember.name} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" onChange={fromHandleler} name='email' placeholder="Email" defaultValue={newmember.email} className="input input-bordered" />
        
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">date</span>
          </label>
          <input type="text" onChange={fromHandleler} name='date' placeholder="Date" defaultValue={newmember.date} className="input input-bordered" />
        
        </div>
 
        <div className="form-control mt-6">
          <button className="btn btn-primary" type='submit'>Update Volunterr</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Update;