import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { toast } from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Member = () => {


  const navigate=useNavigate()
    const registerMember=(event)=>{
        event.preventDefault()
        const form=event.target
        const name=form.name.value
        const email=form.email.value
        const date=form.date.value

        const data={
          name:name,
          email:email,
          date:date
        }

        fetch('http://localhost:5000/addmember',{
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{

          if(data.acknowledged){
            toast.success('Member Added SuccesFully')
             navigate('/registermember')
          }
        })
        .catch((e)=>console.error(e))

    }
    return (
  
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">New Volunterr ADD</h1>
      <p className="py-6"></p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={registerMember} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Enter your Name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="Email" className="input input-bordered" required/>
          <label className="label">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
            
          <input type="date" name='date' placeholder="Enter date" className="input input-bordered" required/>

          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type='submit'>Add Member</button>
        </div>
      </form>
      {/* card */}
    </div>
  </div>
</div>
     
    );
};

export default Member;