import React, { Component } from "react";
import Search from "../components/Search";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        <Search />
        <Cards />
      </div>
    );
  }
}

export default Category;
