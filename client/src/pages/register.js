import React, { Component, useState, setState, } from "react";
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


class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            FirstName: "",
            LastName: "",
            Password: "",
            Email: ""


        };
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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
        e.preventDefault();
        const user = {
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Password: this.state.Password,
            Email: this.state.Email
            
        }
        console.log(user);
        this.setState({
            FirstName: "",
            LastName: "",
            Password: "",
            Email: ""
        });
    }



    render() {
        return (
            <div className="Register">
                <p className="register__title">Register below</p>
                {this.state.success === false &&
                    <p className="alert alert-danger" role="alert">
                        something Happened we dont like
                    </p>
                }
                {this.state.success === true &&
                    <p className="alert alert-success" role="alert">
                        User Registered
                    </p>}
                {this.state.success &&
                    <form onSubmit={this.onSubmit}>
                    </form>}

                {!this.state.success &&
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label> First Name</label>
                            <input type="text" className="form-control" placeholder="First name" name="FirstName" required onChange={this.onChangeFirstName} /></div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" placeholder="Last Name" name="LastName" required onChange={this.onChangeLastName} /></div>

                            <button type="submit" className="btn btn-primary">Submit</button>

                    </form>
                    
                }
            </div>
        );
    }
}
export default CreateUser;
