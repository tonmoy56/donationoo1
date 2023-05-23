import React, { useContext } from 'react';
import { MyAuthContext } from '../Context/AuthContext/AuthContext';
import { toast } from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';

const Registration = () => {

  const {registration}=useContext(MyAuthContext)
  const navigate=useNavigate()

  const handleForm=(event)=>{
    event.preventDefault()
    const email=event.target.email.value
    const password=event.target.pass.value
    registration(email,password)
    .then(data=>{
      const user=data.user
      
      toast.success('Suceesfully SignIn')
      navigate('/')
      

    })
    .catch((e)=>{
      toast.error('Not login')
    })
    
    


  }
    return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Registrartion now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form className="form-control" onSubmit={handleForm}>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        
        
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name='pass' className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>


          <div className="form-control mt-6">
          <button className="btn btn-primary">Registration</button>
        </div>
        </form>


        
      </div>
    </div>
  </div>
</div>
    );
};

export default Registration;