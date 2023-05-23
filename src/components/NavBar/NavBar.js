import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyAuthContext } from '../Context/AuthContext/AuthContext';
import { HiMenu } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';

const NavBar = () => {

  const {user}=useContext(MyAuthContext)
  const userLogin=user?.email

  const [ismobile,setMobile]=useState(false)
  const toogle=(e)=>{
      
      setMobile(true)
    
      
  }
  
    return (
  <div className="navbar flex justify-around bg-black">
  <div  className={ismobile ? 'flex-1 sm:hidden  md:relative' :''
   }>
      <Link to='/' >Donate</Link>
  </div>
  <div className="flex-none ">
    <ul className={
      ismobile ? 'menu menu-horizontal px-5 items-center sm:relative sm:top-3 sm:left-10  bg-blue-800 sm:flex-col bottom-5  md:inline-flex ' :'sm:hidden md:inline-flex'
    } >

    <Link to='/registration' className='mx-3'>Register</Link>


{userLogin ? (
        <Link to='/login'>LogOut</Link>
      ) : (
        <Link to='/login'>Login</Link>
      )}

    

    
     <div className='mx-2'>

    <Link to='/profile'>
      Profile

     
     
     

     
     


     
     
     
     
     
     

</Link>

<Link to='/member' className='mx-2'>New Voluneterr</Link>

<Link to='/registermember' className='mx-2'>Register Volunterr</Link>


     
</div>
     
  
      
    </ul>

   
  </div>
  <button className='md:hidden sm:block'>
  <HiMenu  onClick={()=>toogle(ismobile)}></HiMenu>
  </button>



        
</div>
    );
};

export default NavBar;