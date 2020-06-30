import React, { Component } from "react";
import Login from "../components/Login";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default Signin;
