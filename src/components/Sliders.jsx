import React from "react";
import Slider from "react-slick";
import CardUi from "../components/CardUi";
import img1 from "../images/Resident Evil.jpg";
import img2 from "../images/grib.jpg";
import img3 from "../images/insidious.jpg";

class Sliders extends React.Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 2,
    };
    return (
      <Slider {...settings}>
        <div>
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
              <div className="col-md-3">
                <CardUi img={img1} title="Resident Evil" />
              </div>
              <div className="col-md-3">
                <CardUi img={img2} title="Grib Harold Lee Friedman" />
              </div>
              <div className="col-md-3">
                <CardUi img={img3} title="Insidious" />
              </div>
              <div className="col-md-3">
                <CardUi img={img3} title="Insidious" />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default Sliders;
