//Create a react app from scratch.
import React from "react";
import ReactDom from "react-dom";
const myname = "Meghana";
const lname = "Reddy";
//It should display 2 paragraph HTML elements.
ReactDom.render(
  <div>
    <h1>Created by {myname + " " + lname} </h1>
    <h2>Copyright {new Date().getFullYear()} </h2>
  </div>,
  document.getElementById("root")
);
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
