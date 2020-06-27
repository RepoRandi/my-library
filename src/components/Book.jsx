import React, { Component } from "react";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <span>{this.props.description}</span>
      </div>
    );
  }
}

export default Book;
