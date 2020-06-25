import React, { Component } from "react";
import CardUi from "../components/CardUi";
import { Container } from "reactstrap";
import img1 from "../images/Resident Evil.jpg";
import img2 from "../images/grib.jpg";
import img3 from "../images/insidious.jpg";

class Cards extends Component {
  render() {
    return (
      <Container>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <CardUi img={img1} title="Resident Evil" />
            </div>
            <div className="col-md-4">
              <CardUi img={img2} title="Grib Harold Lee Friedman" />
            </div>
            <div className="col-md-4">
              <CardUi img={img3} title="Insidious" />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Cards;
