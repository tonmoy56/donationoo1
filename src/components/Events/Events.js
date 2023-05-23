import { useContext, useEffect, useState } from "react";
import SelectedEvent from "../SelectedEvent/SelectedEvent";
import { Link } from "react-router-dom";
import { MyAuthContext } from "../Context/AuthContext/AuthContext";


const Events = () => {

    const [events,setEvents]=useState([])
    const {loading}=useContext(MyAuthContext)

    useEffect(()=>{
        fetch('http://localhost:5000/events')
        .then(res=>res.json())
        .then(data=>setEvents(data))

    },[])


    
    return (
        <div >
            <h4 className="text-center">Select at least two Event</h4>
            <hr className=""/>
        <div className=" grid grid-cols-2">
            
           {
            events.map(event=><SelectedEvent event={event}></SelectedEvent>)
           }



        </div>
        </div>
    );
};

export default Events;