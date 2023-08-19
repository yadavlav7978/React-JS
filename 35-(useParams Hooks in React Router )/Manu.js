import React from "react";
import { NavLink } from "react-router-dom";

const Manu=()=>{

    return(
        <>
            <NavLink exact to="/">Home Page</NavLink>
            <br/>
            <NavLink exact to="/Contact">Contact Page</NavLink>
            <br/>
            <NavLink to="/About/Lav/Yadav"  >About Page</NavLink>
             {/* Here I put default value as 'lav' for first name and 'yadav' for last name */}
        </>
    );

};

export default Manu;