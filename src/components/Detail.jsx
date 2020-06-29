import React, { Component } from "react";
import logo from "../images/arrow.png";
import img from "../images/Detail2.png";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md detail1">
            <a className="arrow-detail" href="/#">
              <img src={logo} alt="logo..." style={{ width: "5rem" }} />
            </a>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-6">
            <button
              type="submit"
              className="btn btn-sub badge-pill btn-warning disabled"
            >
              Novel
            </button>
            <h1>DILAN 1990</h1>
            <h5>30 Juni 2019</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              sapiente debitis ex illum tempore illo. Libero, praesentium nihil.
              Culpa optio pariatur ab hic amet praesentium ad blanditiis
              impedit, nemo, fugit omnis ut, voluptas voluptatum officiis
              voluptatem ea iste suscipit nisi! Quidem nobis voluptatem
              deserunt! Impedit corporis aliquid nam dicta aspernatur!
            </p>
          </div>
          <div className="col-md-3">
            <h3 className="text-success">Available</h3>
          </div>
          <div className="col-md-3">
            <div className="detail-img">
              <img src={img} alt="img" style={{ width: "14rem" }} />
            </div>
            <div className="tombol">
              <button type="submit" className="btn btn-warning">
                Borrow
              </button>
              <button type="submit" className="btn btn-success">
                Edit
              </button>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
