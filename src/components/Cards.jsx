import React, { Component } from "react";
import CardUi from "../components/CardUi";
import img1 from "../images/dilan.jpg";
import img2 from "../images/tempting.jpg";
import img3 from "../images/insidious.jpg";
import img4 from "../images/bukan cinderela.jpg";

class Cards extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md">
              <h3 className="container lis">List Book</h3>
            </div>
            <button type="button" className="btn btn-link link">
              See All
            </button>
          </div>
        </div>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-3 cards">
              <CardUi img={img1} title="Dilan" />
            </div>
            <div className="col-md-3">
              <CardUi img={img2} title="Tempting The Marquess" />
            </div>
            <div className="col-md-3">
              <CardUi img={img3} title="Insidious" />
            </div>
            <div className="col-md-3">
              <CardUi img={img4} title="Bukan Cinderella" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
