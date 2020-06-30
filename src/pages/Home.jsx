import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Jumbotron from "../components/Jumbotron";
import Search from "../components/Search";
import Footer from "../components/Footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        {/* <Jumbotron /> */}
        <Search />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default Home;
