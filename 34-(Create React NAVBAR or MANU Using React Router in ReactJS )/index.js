import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));


{
  /*
  ?  ------------------------------------------ React Router ---------------------------------------------------------
      
 !--------------------------------------- why React Router Dom -----------------------
    1. Imagine we are building a website with multiple pages like a Home page, an About page, and a Contact page.
       In a traditional website, when you click on a link to go from one page to another, the whole page reloads,which can be slow and not very smooth.

    2. React Router helps us to solve this problem ,it allow us to navigate between different sections of your app without the need to fully reload the page each time.
       It feels like our website has multiple pages , even though it's actually a single-page application.

      ! Basic points how to use React Router in a React application.

     1. Fisrt we have to install React Router Package using npm
       Command : npm install react-router-dom

     2. Now import the necessary components from "react-router-dom" Such as 'BrowserRouter', 'Route', 'Switch' .
        
       I) <BrowserRouter> Component
          i)   <BrowserRouter> should wrap all other component to provide routing functionality to all components.
          ii)  When the URL changes (e.g. when the user clicks on a link or types in a new URL) then <BrowserRouter> determines
               which component to render based on the matching route path. 
        
       II) <Route> Component
           i)  <Route> Component used to add multiple component in our app and display the component or content based on the URL or path.
           ii) The path attribute in the <Route> component specifies the URL pattern that we want to match.
               When the current URL matches this pattern, the associated component will be rendered.
            
            Note 1**: <Route path="/about" element={</About>} />
                    In this case, if the current URL is "/about", the About component will be rendered.
                    and also the components whose path like "/about/contact" , "/about/name" ,"/about/name/lastname" will be rendered.

            Note 2** : if we only wants to rendere the component associated with the exact path "/about" .
                       the we should use "exact" keyword in the route component.
                       Eg: < Route exact path="/about" component={About} />

         III)<Routes> component 

          i) The <Routes>  component in React Router is used to group multiple <Route> components together. 
          ii) <Routes>  component ensure that only one route is rendered at a time. 
             If none of the routes match, the last <Route> with a path "*" will be rendered (like the NotFound component in the example).

          Eg : <Routes> 
                 <Route path="/" exact element={</Home>} />
                 <Route path="/about" element={</About>} />
                 <Route pth="*" element={</NotFound>} />
               </Routes> 
       
 !        Note**: In version 6,The <Switch> component replaced by <Routes> , and the 'component' attribute inside the </Route>
 !                 replaced by 'element' .            

*/
}
