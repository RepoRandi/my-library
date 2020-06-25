import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        <Cards />
      </div>
    );
  }
}

export default Home;
