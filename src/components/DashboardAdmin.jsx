import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faBook,
  faUserSecret,
  faBookOpen,
  faAngleDoubleRight,
  faBookReader,
  faEnvelope,
  faSignOutAlt,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
import logo1 from "../images/fb.png";
import logo2 from "../images/ins.png";
import logo3 from "../images/tw.png";
import logo4 from "../images/yt.png";

class DashboardAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-dark fixed-top">
          <a className="navbar-brand text-white" href="/">
            <img src={logo} alt="logo..." style={{ width: "3rem" }} />
            &nbsp;<span className="span-brand">My</span>Library | Welcome&nbsp;
            <span className="span-brand">Admin</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0 ml-auto">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="icon text-white ml-4">
            <h5>
              <FontAwesomeIcon icon={faEnvelope} />
            </h5>
          </div>
          <div className="icon text-white ml-3">
            <h5>
              <FontAwesomeIcon icon={faBell} />
            </h5>
          </div>
          <div className="icon text-white ml-3">
            <h5>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </h5>
          </div>
        </nav>
        {/* Batas Nav */}
        {/* SideBar */}
        <div className="row no-gutters">
          <div className="col-md-2 bg-dark pr-3 pt-4">
            <ul className="nav flex-column ml-3 mb-5">
              <li className="nav-item">
                <a className="nav-link active text-white" href="/dashboard">
                  <FontAwesomeIcon icon={faTachometerAlt} />
                  &nbsp;Dashboard
                </a>
                <hr className="bg-secondary" />
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  href="/dashboard/book"
                >
                  <FontAwesomeIcon icon={faBook} />
                  &nbsp;List Books
                </a>
                <hr className="bg-secondary" />
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/dashboard/genre">
                  <FontAwesomeIcon icon={faBookOpen} />
                  &nbsp;List Genre
                </a>
                <hr className="bg-secondary" />
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/#">
                  <FontAwesomeIcon icon={faUserSecret} />
                  &nbsp;List Author
                </a>
                <hr className="bg-secondary" />
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/#">
                  <FontAwesomeIcon icon={faBookReader} />
                  &nbsp;Borrow Books
                </a>
                <hr className="bg-secondary" />
              </li>
            </ul>
          </div>
          {/* Batas SideBar */}
          {/* Content */}
          <div className="col-md-10 p-4 pl-5 ">
            <h3>
              <FontAwesomeIcon icon={faTachometerAlt} />
              &nbsp;Dashboard
            </h3>
            <hr />
            <div className="row text-white">
              <div className="card bg-info ml-3" style={{ width: "16rem" }}>
                <div className="card-body">
                  <div className="card-body-icon">
                    <FontAwesomeIcon icon={faBook} />
                  </div>
                  <h3 className="card-title">List Books</h3>
                  <div className="display-4">255</div>
                  <a href="/dashboard/book">
                    <p className="card-text text-white">
                      Detail&nbsp;
                      <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </p>
                  </a>
                </div>
              </div>

              <div className="card bg-danger ml-3" style={{ width: "16rem" }}>
                <div className="card-body">
                  <div className="card-body-icon">
                    <FontAwesomeIcon icon={faBookOpen} />
                  </div>
                  <h3 className="card-title">List Genre</h3>
                  <div className="display-4">100</div>
                  <a href="/#">
                    <p className="card-text text-white">
                      Detail&nbsp;
                      <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </p>
                  </a>
                </div>
              </div>

              <div className="card bg-success ml-3" style={{ width: "16rem" }}>
                <div className="card-body">
                  <div className="card-body-icon">
                    <FontAwesomeIcon icon={faUserSecret} />
                  </div>
                  <h3 className="card-title">List Author</h3>
                  <div className="display-4">198</div>
                  <a href="/#">
                    <p className="card-text text-white">
                      Detail&nbsp;
                      <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </p>
                  </a>
                </div>
              </div>

              <div className="card bg-warning ml-3" style={{ width: "16rem" }}>
                <div className="card-body">
                  <div className="card-body-icon">
                    <FontAwesomeIcon icon={faBookReader} />
                  </div>
                  <h3 className="card-title">Borrow Books</h3>
                  <div className="display-4">45</div>
                  <a href="/#">
                    <p className="card-text text-white">
                      Detail&nbsp;
                      <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div class="card ml-3 text-center" style={{ width: "15rem" }}>
                <div className="card-primary bg-primary pt-4 pb-4">
                  <img src={logo1} alt="logo..." style={{ width: "7rem" }} />
                </div>
                <div class="card-body">
                  <h5 class="card-title">FaceBook</h5>
                  <a href="/#" class="btn btn-primary">
                    5rb Like
                  </a>
                </div>
              </div>

              <div class="card ml-4 text-center" style={{ width: "16rem" }}>
                <div className="card-header bg-warning pt-4 pb-4">
                  <img src={logo2} alt="logo..." style={{ width: "7rem" }} />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Instagram</h5>
                  <a href="/#" class="btn btn-warning">
                    10k Followers
                  </a>
                </div>
              </div>

              <div class="card ml-4 text-center" style={{ width: "16rem" }}>
                <div className="card-header bg-info pt-4 pb-4">
                  <img src={logo3} alt="logo..." style={{ width: "7rem" }} />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Twitter</h5>
                  <a href="/#" class="btn btn-info">
                    7k Followers
                  </a>
                </div>
              </div>

              <div class="card ml-3 text-center" style={{ width: "16rem" }}>
                <div className="card-header bg-danger pt-4 pb-4">
                  <img src={logo4} alt="logo..." style={{ width: "7rem" }} />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Youtube</h5>
                  <a href="/#" class="btn btn-danger">
                    1jt Subscriber
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Batas Content */}
        </div>
      </div>
    );
  }
}

export default DashboardAdmin;
