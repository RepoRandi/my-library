import React, { Component } from "react";
import logo1 from "../images/face.png";
import logo2 from "../images/ig.png";
import logo3 from "../images/twt.png";
import logo4 from "../images/youtube.png";
import logo5 from "../images/android.JPG";
import logo6 from "../images/ios.JPG";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="bg-light">
        <div className="container-fluid footer">
          <div className="row">
            <div className="col-lg-3">
              <h4>About Us</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                consectetur cum dignissimos aliquam, porro debitis. Ipsam
                corrupti voluptate porro sint exercitationem cupiditate, fugit
                dolore, rerum voluptatum harum officia quisquam quaerat?
              </p>
            </div>
            <div className="col-lg-3">
              <h4>Newsletters</h4>
              <p>Enter Your Email address Below :</p>
              <form action="">
                <div className="input-group">
                  <input type="email" name="" id="" className="form-control" />
                  <div className="input-group-append">
                    <button className="btn btn-dark">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-3">
              <h4>Follow :</h4>
              <a className="navbar-brand" href="/#">
                <img src={logo1} alt="logo..." style={{ width: "3.7rem" }} />
              </a>
              <a className="navbar-brand" href="/#">
                <img src={logo2} alt="logo..." style={{ width: "3.7rem" }} />
              </a>
              <a className="navbar-brand" href="/#">
                <img src={logo3} alt="logo..." style={{ width: "3.7rem" }} />
              </a>
              <a className="navbar-brand" href="/#">
                <img src={logo4} alt="logo..." style={{ width: "3.7rem" }} />
              </a>
            </div>
            <div className="col-lg-3">
              <h4>Download Apps :</h4>
              <a className="navbar-brand" href="/#">
                <img src={logo5} alt="logo..." style={{ width: "8rem" }} />
              </a>
              <a className="navbar-brand" href="/#">
                <img src={logo6} alt="logo..." style={{ width: "8rem" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid copy text-center py-2">
          &copy; 2020. All Right Are Reserved.
        </div>
      </footer>
    );
  }
}

export default Footer;
