import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Sliders from "../components/Sliders";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <Sliders />
        {/* <Search />
        <Cards />
        <Footer /> */}
      </div>
    );
  }
}

export default Home;
