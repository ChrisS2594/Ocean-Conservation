import React, { Component } from "react";
import Nav from "./Components/Nav/index"
import "./App.scss";
import Main from "./../src/pages/main"
import Foot from ".//Components/Footer/Foot"




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1> C.C.M.R.J Oceanic Conservation</h1>
          <Nav />
          < Main />

          


      <Foot />
        </div>
       
      </div>


    );
  }

  
  




}


export default App;
