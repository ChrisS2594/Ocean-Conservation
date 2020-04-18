import React, {useState, useEffect} from "react";
import Redtide from "./redtide";
//import Carousel, { Dots } from '@brainhubeu/react-carousel';
//import '@brainhubeu/react-carousel/lib/style.css';
//import Axios from "axios";
import "./../App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  //BrowserHistory
} from "react-router-dom";

// const [data, setData ] = useState({})
// function getData() {
//this represents the route that cesar is making
//   Axios.get("/main").then(obj => {
//     setData(obj)
//   })
// };
// useEffect(() => {
//   getData()
// } )


function Main() {
      return (
        <div>
          <br />
          <div className="intro">
      <h1 className="intro__title">About Us:</h1>
            <p className="intro__body">It is our vision to bring Awareness to the ongoing problems that are affecting our oceans.
              From The
              overfishing of our ocean’s lake and rivers. To the excessive amounts of trash that is being dumped into our
              oceans and how it is affecting ocean ecology and wildlife to toxic algae blooms.
              <br />
              <br />
              Through sharing of information and discussion we hope to bring more awareness to these issues and help find
              common sense resolutions to these issues.
              Join us on this journey of conservation and awareness</p>

              
          </div>
<div>
  
</div>
          
          <div className="splash">
            <h3 className="splash__title">Overfishing:</h3>
            <p className="splash__body">For many years we have taken advantage of the abundance that has been afforded to us from our ocean’s lakes and
              rivers that lately we have been seeing the effects of what overfishing is having on our ecosystems and
              biodiversity.
              Without Proper fish management we can only make the problem worse.
              
              <Link to="/overfishing"> Would you like to know more?</Link>
             
              </p>
              
            <br />
            <h3 className="splash__title">Ocean Pollution:</h3>
            <p className="splash__body">For many years we as humans have intentionally and unintentionally polluted our oceans with plastic and
              non-biodegradable items. This has caused severe damage and harm to our largest ecosystem on the planet including
              destroying habitats,
              ocean wildlife migration patterns. As well as the death vital ecosystems.              <Link to={"/pollution"}> Would you like to know more?</Link>
              </p>
            <br />
            <h3 className="splash__title">Red Algae/Red Tide:</h3>
            <p className="splash__body">While there are many health benefits to using red algae. And most algae blooms can be beneficial to ocean life as
              they provide food for ocean wildlife. There is a Small Portion of these algae blooms (also known as the red tide)
              that can produce toxins that can kill all plant and fish life within its vicinity.
              <Link to={"/redtide"}> Would you like to know more?</Link>
            </p>
          </div>
        </div>
        
        
  
          );
  }


export default Main;
