import React from "react";
import "./style.css";


// this index.js runs the Nav bar on the app
function Nav() {
    return(
    <nav id="nav" role="navigation">
    <a href="#nav" title="Show navigation">Show navigation</a>
    <a href="#" title="Hide navigation">Hide navigation</a>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li>
        <a href="#" target="_blank"><span>Forum</span></a>

      </li>
      <li>
        <a href="#"><span>Quizes</span></a>
      </li>
      <li><a href="#">Log In</a></li>
    </ul>
  </nav>
    );
}

export default Nav;