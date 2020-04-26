import React, { useState, Component } from "react";
//import { FormGroup } from "react-bootstrap";
import API from "../utils/api";
import "./../App.scss";
//import axios from "axios";


class Event extends Component {
    constructor(props) {
        super(props);
        let today = new Date();
        this.state = {
            title: "",
            description: "",
            date:today

        };
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        // this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
   

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    // onChangeDate(e) {
    //     this.setState({
    //         date:e.target.date
    //     });
    // }

onSubmit(e) {
    e.preventDefault();
    const post ={
        title: this.title,
        description: this.description,
        date:this.today

    }
    this.setState(post);
        console.log =(post)
    API.forumadd(this.state)
        .then(res => {
            console.log(res.data);
            //check if login was successful, if user info comes back
            //if successful rout to to logedin state!!
            //pass hello user 
            //else throw err
        });

       
}

displayBlogPost = (props) => {
     if (!props.length) return null; 
     
    return (
    <div className='Post' id={props.id}>
         <h3>{props.title}</h3>
         <p>{props.body}</p>
     </div>
    );
};
componentDidMount = (e) => {
    this.getBlogPost();
};

getBlogPost = (e) => {
   API.forum('/Event')
    .then((response) => {
      const data = response.data;
      //e.preventDefault()
      this.setState({ event: data });
      
      console.log('Event');
      
    })
    .catch(() => {
      alert('error something happened');
      //
    });
  
    
  
  }
render() {
    return (

        <div className="forum">
            <p className="forum__title">Community Message Board</p>

            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Title" name="event" require onChange={this.onChangeTitle} />
                    <div className="form-group" >
                        <input className="form-control" type="text" placeholder="Event" name="event" require onChange={this.onChangeDescription} />
                    </div>
                </div>
                <div className="message">
                    forum goes here
                            </div>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>

            <div className="blog">
                {this.getBlogPost(this.state.post)}
    </div>
        </div>

    );
}
}

export default Event;