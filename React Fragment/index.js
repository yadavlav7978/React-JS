import React from 'react'
import ReactDOM from 'react-dom';
 
// ------------------------------------ Tutorial: 3 --------------------------------------------------------


// since <div> method create another 'div' inside the div whose id is 'root' which takes extra space and time. 
// so use 'React.Fragment' which does not create another div inside 'root' div
// So 'React-Fragment' is third option to add multiple Jsx in the ReactDOM

ReactDOM.render(
    <React.Fragment>                        
        <h1>React.Fragment First Element</h1>        
        <p>React.Fragment Second Element</p>
    </React.Fragment>,
    document.getElementById('root')
);
//  We can simply rewrite above same code as follows(Without writing 'React.Fragment')

ReactDOM.render(
    <>                        
        <h1>React.Fragment First Element</h1>        
        <p>React.Fragment Second Element</p>
    </>,
    document.getElementById('root')
);




