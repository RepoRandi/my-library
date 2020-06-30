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
          <div className="col-md-7">
            <button
              type="submit"
              className="btn btn-sub badge-pill btn-warning disabled"
            >
              Novel
            </button>
            <h1>DILAN 1990</h1>
            <h5>30 Juni 2019</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium nostrum labore suscipit aliquid? Nostrum, quis
              deleniti eveniet tenetur, expedita quae minima fugit dolorem
              dolore cupiditate illum! Quaerat soluta at nisi debitis eaque
              impedit enim et tempora amet. Rem voluptatibus excepturi quisquam
              magni reiciendis pariatur officia facilis ea, alias laborum
              aliquid inventore, libero, quos eligendi aut eum. Sit asperiores
              adipisci cumque non facilis, sequi, minima laborum distinctio et
              officia incidunt doloribus voluptatibus ipsa quas enim optio sunt
              unde explicabo laboriosam sed quaerat blanditiis? Eligendi aliquam
              id fugit optio veritatis placeat inventore officia cumque
              voluptatum. Eum sint repudiandae culpa vel cupiditate quo.
            </p>
          </div>
          <div className="col-md-2">
            <h3 className="text-success">Available</h3>
          </div>
          <div className="col-md-3">
            <div className="detail-img">
              <img src={img} alt="img" style={{ width: "14rem" }} />
            </div>
            <div className="menu-detail">
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
