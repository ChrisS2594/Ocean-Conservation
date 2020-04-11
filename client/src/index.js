import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

function tires() {
    var tire = document.createElement("tire");
    tire.setAttribute("src", "oceantires.png");
    tire.setAttribute("width", "600");
    tire.setAttribute("height", "400");
    tire.setAttribute("alt", "Tires in the sea");
    document.body.appendChild(tire);
  }