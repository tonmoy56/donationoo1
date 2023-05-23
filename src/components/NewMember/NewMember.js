import React from 'react';
import { Link } from 'react-router-dom';

const NewMember = ({member,handleDelete}) => {
    // console.log(member)
    const {_id,name,email,date}=member

    return (
        <tr>
        

       
        <th>{name}</th>
        <td>{email}</td>
        <td>{date}</td>
        <td>
        <Link to={`/update/${_id}`}>

            update
         </Link>
          <button onClick={()=>handleDelete(_id)}>Delete</button>
          
          
           
        </td>
   
      </tr>
      

            
        
    );
};

export default NewMember;