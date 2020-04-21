import React, { useState, setState,  } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./../App.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

//import OvrFsh from "./overfishing"
import axios from "axios";


class createuser extends component {
    constructor (props) {
        super(props);
        
        this.State={
            FirstName:"",
            LastName:"",
            Password:"",
            Email:"",
            

        };
        this.onChangeLastName=this.onChangeLastName.bind(this);
        this.onChangeFirstName=this.onChangeFirstName.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        
    }
    onChangeFirstName(e) {
        this.setState({
            FirstName: e.target.value
        });
    }
    
    onChangeLastName(e) {
        this.setState({
            LastName: e.target.value
        });
    }
    
    onChangePassword(e) {
        this.setState({
            Password: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        });
    }

    onSubmit(e) {
        const user={
            FirstName: this.State.FirstName,
            LastName: this.State.LastName,
            Password: this.State.Password,
            Email: this.State.Email
        }
        console.log(user);
        this.setState({
         FirstName: "",
         LastName:"",
         Password:"",
         Email:""
        });
    }



    render() {
    return (

        <div className="Register">
            <p className="register__title">Register below</p>
            {this.State.success === false &&
            <p className="aler aler-danger" role="alert">
                {this.state.message}
                </p>
                }
                {this.state.success === true &&
                <p className="alert alert-success" roler="alert">
                    User Registered
                    </p>}
                   {this.State.success &&
                   <form onSubmit={this.onSubmit}>
                       </form>} 
        </div>
    );
}
}
export default createuser;
