import React, { useContext } from "react";
import { data } from "./CompA";

const CompB = () => {
    
// Use the useContext hook to access the shared data (user) from the context
  const UseData = useContext(data);
  return (
    <>
      <h1>FirstName : {UseData.FirstName}</h1>
      <h1>LastName : {UseData.LastName}</h1>
      <h1>Dob : {UseData.Dob}</h1>
    </>
  );
};

export default CompB;
