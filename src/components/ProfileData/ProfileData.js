import React from 'react';

const ProfileData = (eventdata) => {
console.log(eventdata)

    const handlecancel=(id)=>{

       fetch(`http://localhost:5000/event/${id}`,{
        method: 'DELETE',

        headers: {
          'Content-type': 'application/json'
         }
       })
       .then(res=>res.json())
       .then(data=>console.log(data))
       .catch((e)=>console.error(e))
       

    }
  
    
    return (
        


<div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={eventdata.eventdata.pic} className="w-40 h-40" />
    <div>
      <h1 className="text-5xl font-bold">{eventdata.eventdata.name}</h1>
      <p className="py-6">{eventdata.eventdata.price}</p>
      <button className="btn btn-primary" onClick={()=>handlecancel(eventdata.eventdata._id)}>Cancel</button>
    </div>
  </div>
</div>

 
       
    );
};

export default ProfileData;