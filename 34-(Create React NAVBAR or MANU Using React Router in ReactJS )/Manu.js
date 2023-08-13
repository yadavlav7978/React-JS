import React from "react";
import { NavLink } from "react-router-dom";

const Manu=()=>{

    return(
        <>
            <NavLink exact to="/">Home Page</NavLink>
            <br/>
            <NavLink exact to="/Contact">Contact Page</NavLink>
            <br/>
            <NavLink  exact to="/About">About Page</NavLink>
       
        </>
    );

};

export default Manu;