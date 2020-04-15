import React from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

// this index.js runs the Nav bar on the app
function Nav() {
  return (

    <nav id="nav" role="navigation">
      <a href="#nav" title="Show navigation">Show navigation</a>
      <a href="#" title="Hide navigation">Hide navigation</a>
      <Router>
        <ul>
          <li><Link to={"#"}>Home</Link></li>
          <li>
            <Link to={"#"}><span>Forum</span></Link>

          </li>
          <li>
            <Link to={"#"}><span>Quizes</span></Link>
          </li>
          <li><Link to={"#"}>Log In</Link></li>
        </ul>
      </Router>
    </nav>
  );

}


export default Nav;