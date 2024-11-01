import React from "react";
/*
The React object is the entry point to the React library. 
*/
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import MainApp from "./App";



/* ReactNode:
ReactNode is  anything(number,null,a ReactElement,text,or an array of ReactNodes) that React can render.
It  can be text, number, boolean, null, undefined, a portal, a ReactElement, 
We need to pass ReactNode to root.render(children: React.ReactNode) method
*/


const root = ReactDOM.createRoot(document.getElementById("root"));
let simpleReactExample = false;
if (simpleReactExample) {
  /**
 The smallest React example looks like this:
 */
  root.render(<h1>Hello, world!</h1>);
} else {
  /*For other example use this block.All our exaples are loaded from App.js file*/
  /* MainApp is a function in the App.js with will return JSX element */
  root.render(
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  );
  /*Wrapping it with <React.StrictMode> helps
   catch potential issues by enabling extra checks, 
   especially useful during development. */
}

reportWebVitals();

/*reportWebVitals() at the end is a function 
call used for performance monitoring. 
It allows you to measure and report performance metrics, 
such as loading times or interactivity, for the app. */
