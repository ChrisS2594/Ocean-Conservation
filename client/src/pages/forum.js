import React, { useState, Component } from "react";
import { FormGroup } from "react-bootstrap";
import API from "../utils/api";
import "./../App.scss";
import axios from "axios";

const Event = require ("../../../models/events.model");

class Forum extends Component {
constructor(props) {
    super(props);

    this.state ={
      event:""
    };
    
  }
  onChange=(e) => {
    this.setState({
      [e.target.event]: e.target.value
    });
  }
  onSubmit=(e) => {
    e.preventDefault()
    console.log(this.state);
    API.event(this.state)
    .then(res => {
      console.log(res.data)
      //check if login was successful, if user info comes back
      //if successful rout to to logedin state!!
      //pass hello user 
      //else trow err
    })
  }
  render() {
    return(
      
      <div className="Register">
                <p className="register__title">Community Message Board</p>
                    
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                                <input className="form-control" type="text" placeholder="Type Here" name="message" required onChange={this.onChange} /></div>
                            <div className="message">
                                forum goes here
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                      
                    </form>
                    
                
            </div>
            
    );
  }
}

export default Forum;