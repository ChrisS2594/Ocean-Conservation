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
            Title: e.target.value
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

onSubmit = (e) => {
    e.preventDefault()
    //console.log(this.state);
    API.forumadd(this.state)
        .then(res => {
            console.log(res.data);
            //check if login was successful, if user info comes back
            //if successful rout to to logedin state!!
            //pass hello user 
            //else throw err
        });

       
}

displayBlogPost = (post) => {
     if (!post.length) return null; 
     
    return post.map((post, index) => (
     <div key={index} >
         <h3>{post.title}</h3>
         <p>{post.body}</p>
     </div>
    ));
};
componentDidMount = () => {
    this.getBlogPost();
};

getBlogPost = () => {
   API.forum()
    .then((response) => {
      const data = response.data;
      this.setState({ post: data });
      console.log('data has been recieved');
    })
    .catch(() => {
      alert('error something happened');
    });
  
    
  
  }
render() {
    return (

        <div className="forum">
            <p className="forum__title">Community Message Board</p>

            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Title" name="event" require onChange={this.onChangeTitle} />
                    <div className="form-control" >
                        <input className="form" type="text" placeholder="Event" name="event" require onChange={this.onChangeDescription} />
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