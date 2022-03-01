// TRADITIONAL----------- 
// *************Createing an h1 and displaying on the UI
// //1. creating an h1 element
// var heading = document.createElement('h1');
// // 2. assign a text value
// heading.innerHTML='Hello World!';
// // 3. show this on the UI
// document.getElementById('root')
// .appendChild(heading);
// //Then you will see the Hello world on the UI
// // *******Creating a paragrapgh and displaying on the UI************
// var parag=document.createElement('p');
// parag.innerHTML='<i>Hello World!</i>';
// document.getElementById('root')
// .appendChild(parag)
// // *******Creating an input and diplaying on the UI**************
// var passwordInput = document.createElement('input');
// document.getElementById('root')
// .appendChild(passwordInput);
// //********Giving Line Break */
// var lineBreak = document.createElement('hr');
// document.getElementById('root')
// .appendChild(lineBreak);
// //******Creating a button and displaying on the UI********** 
// var submitButton = document.createElement('button');
// submitButton.innerHTML='Submit!!!'
// document.getElementById('root')
// .appendChild(submitButton)
//REACT
import React from "react";
import ReactDOM from "react-dom";
ReactDOM.render(
  <div>
      <h1>Hello World!</h1>
      <p> Hello World!</p>
      <input></input>
      <hr></hr>
      <button>Submit</button>
  </div>
  ,document.getElementById('root')
)