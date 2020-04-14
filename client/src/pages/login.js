import React, { Component } from "react";
import axios from "axios";


export default class Login extends Component {
    contructor(props) {
        super(props);

        this.state = {
            email: "",
            password:"",
        };
            this.handleSubmit = this.handleSubit.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(event) {
            this.setState({
                [event.target.name]: event.target.value
            });
        }

        handleSubmit(event) {
            const { email, password } = this.state;

            axios
            .post(
              //need to add link to db
                "http://localhost:3001/Your DB HERE",
                {
                    user: {
                        email: email,
                        password: password,
                    }
                },
                { withCredentials: true }
            )
            .then(response => {
                console.log("login error", error);
                //if (response.data.status === "created")
            });
            event.preventDefault();
        }
        render() {
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="email"
                    name ="email"
                    placholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                    />

                    <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                    />

                    <button type="submit"> Log In </button>
                </form>
            </div>
            
        }
    }

