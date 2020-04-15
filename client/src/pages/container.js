import React, { Component } from "react";
import Main from "./main";
import OvrFsh from "./overfishing";
import Polution from "./pollution";
import Redtide from "./redtide";

class Container extends Component {
  state = {
    currentPage: "Main"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Main") {
      return <Main />;
    } else if (this.state.currentPage === "OvrFsh") {
      return <OvrFsh />;
    } else if (this.state.currentPage === "Polution") {
      return <Polution />;
    } else if (this.state.currentPage === "RedTide") {
      return <Redtide />;
    }
  };

  
  }


export default Container;
