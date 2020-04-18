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
// import { DropdownItem, Dropdown, DropdownMenu } from "react-bootstrap";


// this index.js runs the Nav bar on the app
function Nav() {
  return (
      <nav id="nav" role="navigation">
        <a href="#nav" title="Show navigation">Show navigation</a>
        <a href="#" title="Hide navigation">Hide navigation</a>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* <Dropdown.toggle variant="success" id="dropdown-basic"><span>Pages</span></Dropdown.toggle>
          <DropdownMenu>
            <Dropdownitem Link to="/overfishing">Over Fishing</Dropdownitem>
            <Dropdownitem Link to="/pollution">Pollution</Dropdownitem>
            <Dropdownitem Link to="/redtide">Red Tide</Dropdownitem>
            </DropdownMenu> */}
            </li>

          <li>
            <Link to="/quiz"><span>Quizes</span></Link>
          </li>
          <li><Link to="/login">Log In</Link></li>
        </ul>

      </nav>
   
  );

}


export default Nav;