// var React = require('react');

// var ReactDOM = require('react-dom');

// this is react
// using div
// ReactDOM.render(
//     <div>
//         <h1>Hello this is Shankar Lamichhane.</h1>
//         <p>This is my first react project .....</p>
//     </div>,
// document.getElementById('root'))

// ReactDOM.render(
//     [
//         <h1>Hello this is Shankar Lamichhane.</h1>,
//         <p>This is my first react project .....</p>,
//      ],
// document.getElementById('root'))

// ReactDOM.render(
//     <React.Fragment>
//         <h1>Hello this is Shankar Lamichhane.</h1>
//         <p>This is my first react project .....</p>
//     </React.Fragment>,
// document.getElementById('root'))

// ReactDOM.render(
//     <>
//         <h1>Hello this is Shankar Lamichhane. </h1>
//         <p>This is my first react project ..... </p>
//     </>,
//     document.getElementById('root')
// );

// this is without react
    // var h1 = document.createElement("h1");
    // h1.innerHTML = "Its me shankar lamichhane";
    // document.getElementById("root").appendChild(h1);


import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const name = "Shankar Lamichhane"
const abt = "This is my first react project !!!"

const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/230/300";
const img3 = "https://picsum.photos/260/300";
const img4 = "https://picsum.photos/300/300";

const link = "https://shankarlamichhane.com.np";
// template litrals ``

// console.log(`its me ${name} `)

ReactDOM.render( //we can use {} for writing javascript inside the jsx
    //inside {} we can only use expressions no statements
    <React.Fragment>
        <h2 className="heading">Welcome to React Tautorial</h2>
        <div className="mydiv">
            <img src={img1} alt="renaom" />
            <img src={img2} alt="renaom" />
            <img src={img3} alt="renaom" />
        </div>
    </React.Fragment>,
    document.getElementById("root")
);

// <h1>Hello Its me {name} </h1> 
// <p>{abt}</p>
// <p>The sum of 3 and 7 is {3 + 7}</p>
// <p contentEditable="true">My random number is {Math.random()} 13</p>
// <p>{`${name} . ${abt}`}</p>
// <p>Current Date is {currentDate}</p>
// <p>Current Time is {currentTime}</p>