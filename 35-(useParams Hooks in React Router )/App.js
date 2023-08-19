import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Manu from "./Manu";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Manu />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/About/:fname/:lname" element={<About />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

{/*

!--------------------------------------------- useParams Hooks -------------------------------------------------------------

   1. useParams is a hook provided by the React Router library that allows us to access the parameters from the current route's URL.
   
   2. When we define routes, we can include parameters in the route pattern by placing a colon before the parameter name.
       For example:
       <Route path="/About/:fname/:lname" element={<About />}></Route>
       In this case, the fname and lname is a parameter that will be extracted from the URL.

  3. To access this parameter inside the About component, we can use the useParams hook .
      Example : const {fname,lname}=useParams();

*/}
