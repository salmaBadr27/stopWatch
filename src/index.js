import React from "react";
import ReactDOM from "react-dom";
import App from './containers/App';
import actions from './containers/App/actions';
console.log("actions: ", actions)

const app = document.getElementById("index");

ReactDOM.render(<App/>, app);



