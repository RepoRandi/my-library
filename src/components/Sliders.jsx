import React, { Component } from "react";
import img1 from "../images/poster1.png";
import img2 from "../images/poster2.png";
import img3 from "../images/poster3.png";
import img4 from "../images/poster4.png";

class Sliders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md">
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={img1}
                      className="d-block w-100 slideSize"
                      alt="img"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img2}
                      className="d-block w-100 slideSize"
                      alt="img"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img3}
                      className="d-block w-100 slideSize"
                      alt="img"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img4}
                      className="d-block w-100 slideSize"
                      alt="img"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sliders;
