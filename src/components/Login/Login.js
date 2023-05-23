import React, { useContext } from 'react';
import { MyAuthContext } from '../Context/AuthContext/AuthContext';
import { signOut } from 'firebase/auth';
import {  toast } from "react-hot-toast";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const{ login,logout}=useContext(MyAuthContext)

    let navigate = useNavigate();
    let location = useLocation();
    
    let from = location.state?.from?.pathname || "/";
    
  const handleForm=(event)=>{
    event.preventDefault()
    const form=event.target
    
    const email=form.email.value
    const password=form.pass.value
    login(email,password)
    // toast.success('Succesfully login')
       
    // form.reset()
   
    //  .then(result => {
    //     const user = result.user

    //     const currentUser = {
    //       email: user.email
    //     }


    //     fetch('http://localhost:5000/jwt', {
    //       method: 'POST',

    //       headers: {
    //         "Content-Type": "application/json",

    //       },
    //       body: JSON.stringify(currentUser)
    

    //     })
       

    //   })
       
    .then(result=>{
        const user=result.user
        const cureentuser={
          email:user.email
        }

       fetch('http://localhost:5000/jwt',{
        method:"POST",

        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },

        body: JSON.stringify(cureentuser)
       })
       .then(res=>res.json())
       .then(data=>{
        localStorage.setItem('token',data.token)
        // aikhane navigate korte hobe
        toast.success('You Succesfully login')
        navigate(from, { replace: true });

       })
      //  .ctach((e)=>console.error(e))
     
       
    
        
    })
  
  
    


  }


  const handleLogout=()=>{
    
    logout()
    .then(toast.success('Succesfully LogOut'))
   
  }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
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
                <button className="btn btn-primary">Login</button>
              </div>


              
              
              </form>



              
      
      
              
            </div>
            
            <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={()=>handleLogout()}>LogOut</button>
              </div>

          </div>
        </div>
      </div>
    );
};

export default Login;