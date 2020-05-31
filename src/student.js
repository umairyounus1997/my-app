// import React from "react"


// //Old Method (Do not Preferable)
// // function Student(){
// //     return <h1> Hello Ali</h1>
// // }
// const Student = () =>{
//     return <h1>Hello Umair</h1>;
// }

// export default Student;

//props
import React, { Component } from "react";
import PropTypes from "prop-types";

const Student = props =>{
    return(
    <div>
        <h1>Hello, {props.name}</h1>
    <h1>Your Profile No: {props.roll}</h1>
        </div>
    );
};

// class Student extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello{this.props.name}</h1>
//                 <h2>Your Roll No.{this.props.roll}</h2>
//                 </div>
//         );
//     }
// }
// Student.propTypes = {

//     name: PropTypes.string.isRequired
// }; 
export default Student;

// Children in JSX

// import React, {Component} from "react";

//Functional Component
// const Student = props => {
// return <h2> Hello World </h2>;
// };

// class Student extends Component {
//     render(){
//     return <h2> Hello World {this.props.children} </h2>;
//     }
// }

// export default Student;


//State
// import React, { Component } from 'react';

// class Student extends Component{
//     state = {
//         name: "Umair",
//         roll: this.props.roll

//     }
//     render(){
//         return(
//         <h1>Hello {this.state.name} Your Roll No. {this.state.roll}</h1>
        
//         )
//     }
// }
// export default Student;

//State (Inside the Constructor)

// import React, { Component } from 'react';

// class Student extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//                     name: "Umair",
//                     roll: this.props.roll
            
//                 };
//     }
//     render(){
//         return(
//         <h1>Hello {this.state.name} Your Roll No. {this.state.roll}</h1>
        
//         )
//     }
// }
// export default Student;

//Event Handling

// import React, { Component } from 'react';
// class Student extends Component{
// constructor(props){
//     super(props);
//     this.state = {
//         name: "Umair",
//         roll: this.props.roll
//     };
//     this.handleClick = this.handleClick.bind(this);
// }

//     handleClick = () =>{
//         console.log("Button Clicked", this);
//     }
//     render(){
//         return(
//             <div>
//                 <h1> Hello {this.state.name} </h1>
//                 <button onClick={this.handleClick}>Click Me</button>
//                 </div>
//         )
//     }
// }
// export default Student;

//Update setState

import React, { Component } from 'react';
class Student extends Component{
constructor(props){
    super(props);
    this.state = {
        name: "Umair",
        roll: this.props.roll
    };
}

    handleClick = () =>{
        this.setState({name: "Jai"});
    };
    render(){
        return(
            <div>
                <h1> Hello {this.state.name} Your Roll No. {this.props.roll} </h1>
                <button onClick={this.handleClick}>Click Me</button>
                </div>
        )
    }
}
export default Student;

