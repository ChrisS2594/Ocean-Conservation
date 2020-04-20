import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import Carousel, { Dots } from '@brainhubeu/react-carousel';
//import '@brainhubeu/react-carousel/lib/style.css';
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


export default class createuser extends component {
    constructor (props) {
        super(props);
        this.onChangeLastName=this.onChangeLastName.bind(this);
        this.onChangeFirstName=this.onChangeFirstName.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.State={
            FirstName:"",
            LastName:"",
            Password:"",
            Email:"",
            

        };

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
// export default function Register() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     function validateForm() {
//         return email.length > 0 && password.length > 0;
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//     }

    render() {
    return (

        <div className="Register">
            <p className="register__title">Register below</p>
            <form onSubmit={handleSubmit}>
                <lable className="frmlbl">
                    <FormGroup controlId="email" bsSize="large">
                        Name:
                    <FormControl
                            autoFocus
                            type="Name"
                            value={FirstName}
                            onChange={e => setName(e.target.value)}
                        />
                    </FormGroup>
                </lable>
                <lable>
                <FormGroup controlId="LastName" bsSize="large">
                       Last Name:
                    <FormControl
                            autoFocus
                            type="Name"
                            value={LastName}
                            onChange={e => setName(e.target.value)}
                        />
                    </FormGroup>
                </lable>
              
                <lable className="frmlbl">
                <FormGroup controlId="email" bsSize="large">
                    Email:
                    <FormControl
                        autoFocus
                        type="email"
                        value={Email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>
                </lable>
               
                <lable className="frmlbl">
                <FormGroup controlId="Password" bsSize="large">
                    Password:
                    <FormControl
                        value={Password}
                        onChange={e => setPassword(e.target.value)}
                        type="Password"
                    />
                </FormGroup>
                </lable>
                <lable className="frmlbl">
                <FormGroup controlId="passwordconfirm" bsSize="large">
                    Confirm Password:
                    <FormControl
                        value={Password}
                        onChange={e => setPassword(e.target.value)}
                        type="Password"
                    />
                </FormGroup>
                </lable>
                <br />
                <Button className="btnsbmt" block bsSize="large" disabled={!validateForm()} type="submit">
                    Submit
        </Button>
            </form>
        </div>
    );
}
}
// export function Restister() {
//     <div>
//         <Form />
//     </div>
// }
// export default Form;
