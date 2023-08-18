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
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

{/*

By default, React Router is not case-sensitive. This means that the routes /About and /aBouT will be considered the same. 
To make React Router case-sensitive, you can use the caseSensitive prop on the Route component. 

For example:  <Route exact path="/AbOuT" caseSensitive={true} element={<About />}></Route> 

In above exmple 'AbOuT' and 'About' both will treat as different so it will return page not found.
But By default caseSensitive is false so it will treat both 'AbOuT' and 'About' as same and display the about component.

*/}
