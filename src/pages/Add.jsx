import React, { Component } from "react";
import AddBook from "../components/AddBook";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <AddBook />
      </div>
    );
  }
}

export default Add;
