import React from "react";
import { FormGroup } from "react-bootstrap";


class Forum extends Component {
constructor(props) {
    super(props);

    this.state ={
      email:"",
      password:""
    };
    
  }
  onChange=(e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit=(e) => {
    e.preventDefault()
    console.log(this.state);
    API.loginUser(this.state)
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