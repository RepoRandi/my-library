import React, { Component } from "react";

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
          <div className="col-md mt-3">
            <div className="card text-center" style={{ width: "10.5rem" }}>
              <img
                src={`${process.env.REACT_APP_API_URL}${this.props.image}`}
                className="card-img-top"
                style={{ height: "11rem" }}
                alt="img"
              />
              <div className="card-body bg-secondary">
                <h5
                  className="card-title text-light mb-0 mt-auto"
                  style={{ fontSize: "1rem" }}
                >
                  {this.props.title}
                </h5>
                {/* <a href="/detail" className="btn btn-link">
                  Detail
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListBook;
