import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Login from "../components/Login";
import Jumbotron from "../components/Jumbotron";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Register from "../components/Register";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* <Navbar />
        <Jumbotron />
        <Search />
        <Cards />
        <Footer /> */}
        <Login />
        {/* <Register /> */}
      </div>
    );
  }
}

export default Home;
