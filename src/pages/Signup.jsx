import React, { Component } from "react";
import Register from "../components/Register";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Register />
      </div>
    );
  }
}

export default Signup;
