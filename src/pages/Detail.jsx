import React, { Component } from "react";
import DetailBook from "../components/DetailBook";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <DetailBook />
      </div>
    );
  }
}

export default Detail;
