import React from "react";
import { useParams } from "react-router-dom";

const About = () => {

  const {fname,lname}=useParams();

  return (<>
    <h1>Welcome to <span style={{ color: "red" }}>About Page</span></h1>
    <h1>My First name is {fname}</h1>
    <h1> My Last name is {lname}</h1>
    </> ) 
  
};

export default About;
