import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Login from "../components/Login";
import Jumbotron from "../components/Jumbotron";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Cards />
        <Login />
      </div>
    );
  }
}

export default Home;
