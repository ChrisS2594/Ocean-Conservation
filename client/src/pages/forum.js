import React, { useState, Component } from "react";
//import { FormGroup } from "react-bootstrap";
import API from "../utils/api";
import "./../App.scss";
import axios from "axios";


class Event extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            event: ""
        };
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeEvent = this.onChangeEvent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }
    onChangeEvent(e) {
        this.setState({
            Esvent: e.target.value
        });
    }

onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
    API.forum(this.state)
        .then(res => {
            console.log(res.data);
            //check if login was successful, if user info comes back
            //if successful rout to to logedin state!!
            //pass hello user 
            //else trow err
        });
}
render() {
    return (

        <div className="forum">
            <p className="forum__title">Community Message Board</p>

            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input className="titleinput" type="text" placeholder="Title" name="title" required onChange={this.onChange} />
                    <div className="input" >
                        <input className="form" type="text" placeholder="Event" name="event" require onChange={this.onChange} />
                    </div>
                </div>
                <div className="message">
                    forum goes here
                            </div>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>


        </div>

    );
}
}

export default Event;