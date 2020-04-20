import React, { Component, useState } from "react";
import Nav from "./Components/Nav/index"
import "./App.scss";
import Main from "./pages/main"
import Foot from "./Components/Footer/Foot"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Redtide from "./pages/redtide";
import Overfsh from "./pages/overfishing";
import Login from "./pages/login";
//import Quiz from "./pages/quiz";
import Polution from "./pages/pollution";
import Register from "./pages/register";
import axios from "axios";








function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }


  function loginUser(email, password) {
    console.log("hitmebabyonemoretime");
    axios.post("http://localhost:3001/users/", {
      email: email,
      password: password
    })
      .then(function (myUser) {

        console.log(myUser)
        // If there's an error, log the error
      });

    // .catch(function() {
    //   axios.alert("#alert .msg").text("The email and/or password you've entered is incorrect");
    //   axios.alert("#alert").fadeIn(500);
    // });
  }
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <h1> C.C.M.R.J Oceanic Conservation</h1>

          <Nav />

          <Route exact path="/" component={Main} />
          <Route exact path="/overfishing" component={Overfsh} />
          <Route exact path="/login" render={(props) => <Login {...props} setPassword={setPassword} password={password} email={email} validateForm={validateForm} loginUser={loginUser} setEmail={setEmail} />} />
          <Route exact path="/pollution" component={Polution} />
          <Route exact path="/redtide" component={Redtide} />
          <Route exact path="/register" component={Register} />


          <Foot />
        </div>

      </div>

    </Router>
  );
}










export default App;
