import React, { Component } from "react";
import { Link } from "react-router-dom";

class ListBook extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="col-md">
            <div className="card text-center" style={{ width: "10.5rem" }}>
              <img
                src={`http://localhost:3000/${this.props.image}`}
                className="card-img-top"
                alt="img"
              />
              <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <a href="/detail" className="btn btn-link">
                  Detail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListBook;
