// import React  from "react";
// import ReactDOM from "react-dom";
// import App from "./App"

// ReactDOM.render(<App />, document.getElementById("root"));

// // Let el = React.createElement('h1', null, "Hello ");
// // let el = <h1> Welcome to My first App</h1>;
// // ReactDOM.render(el, document.getElementById("root"));


//props

import React from "react";
import ReactDOM from "react-dom";
import Student from "./student";
ReactDOM.render(
<Student name = " Umair" roll={101}/>,
document.getElementById("root"));

//Children in JSX
// import React from "react";
// import ReactDOM from "react-dom";
// import Student from "./student";

// //Rendering Component
// ReactDOM.render(<Student> I am Student </Student>, document.getElementById("root"));

//State
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Student from "./student";

//Rendering Component (State)
// ReactDOM.render(<Student roll="013"/>, document.getElementById("root"))

//Event Handling

import React from 'react';
import ReactDOM from 'react-dom';
import Student from './student';

//Rendering Component (Event Hanling)

ReactDOM.render(<Student roll="101"/>, document.getElementById("root"));


