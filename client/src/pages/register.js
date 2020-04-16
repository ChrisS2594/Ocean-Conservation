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
//import Axios from "axios";





export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

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
                            value={name}
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
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>
                </lable>
               
                <lable className="frmlbl">
                <FormGroup controlId="password" bsSize="large">
                    Password:
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                </lable>
                <lable className="frmlbl">
                <FormGroup controlId="passwordconfirm" bsSize="large">
                    Confirm Password:
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
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

