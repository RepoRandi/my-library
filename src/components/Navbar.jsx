import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlus,
  faSwatchbook,
  faListAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    // Navbar
    <div>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo..." style={{ width: "3rem" }} />
          &nbsp;<span className="span-brand">My</span>Library
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
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link menu" href="/">
                <FontAwesomeIcon icon={faHome} />
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link menu " href="/add">
                <FontAwesomeIcon icon={faPlus} />
                &nbsp;Book
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link menu" href="/all">
                <FontAwesomeIcon icon={faSwatchbook} />
                &nbsp;All Book
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faListAlt} />
                &nbsp;Categories
              </a>
              <div
                className="dropdown-menu bg-light"
                aria-labelledby="navbarDropdown"
              >
                <a className="dropdown-item" href="/all">
                  Horror
                </a>
                <a className="dropdown-item" href="/all">
                  Religi
                </a>
                <a className="dropdown-item" href="/all">
                  Romance
                </a>
                <a className="dropdown-item" href="/all">
                  Tekonologi
                </a>
              </div>
            </li>
            <li className="nav-item dropdown drop-menu">
              <a
                className="nav-link dropdown-toggle"
                href="/#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faUser} />
              </a>
              <div
                className="dropdown-menu bg-light"
                aria-labelledby="navbarDropdown"
              >
                <a className="dropdown-item" href="/all">
                  Profile
                </a>
                <a className="dropdown-item" href="/all">
                  Change Password
                </a>
                <a className="dropdown-item" href="/all">
                  Logout
                </a>
              </div>
            </li>
          </ul>
          <div>
            <a
              className="btn btn-nav  badge-pill btn-outline-dark my-2 my-sm-0"
              href="/login"
            >
              Sign-in
            </a>
            <a
              className="btn btn-nav  badge-pill btn-dark my-2 my-sm-0"
              href="/register"
            >
              Sign-up
            </a>
          </div>
        </div>
      </nav>
      {/* Batas Nav */}
      {/* Jumbotron */}
      <div className="jumbotron jumbotron-fluid jumnav">
        <div className="container">
          <h1 className="display-4">
            Jangan Membaca Sampai <span className="span-jmb">Koma,</span>
            <br></br>Tapi Bacalah Sampai{" "}
            <span className="span-jmb">Titik.</span>
          </h1>
        </div>
      </div>
    </div>
    // Batas Jumbotron
  );
};

export default Navbar;
