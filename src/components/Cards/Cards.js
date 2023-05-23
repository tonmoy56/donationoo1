import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({image}) => {
    

    return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image.img} alt="pic" className="" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{image.category}</h2>
    <p>{image.donate}</p>
    <div className="card-actions">
     <Link to={`/events`}> <button className="btn btn-primary">Donate Now</button></Link>
    </div>
  </div>
</div>
    );
};

export default Cards;