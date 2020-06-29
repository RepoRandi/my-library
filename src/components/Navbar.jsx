import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/book.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light ">
      <a className="navbar-brand" href="/#">
        <img src={logo} alt="logo..." style={{ width: "3rem" }} />
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
            <a className="nav-link menu " href="/#">
              <FontAwesomeIcon icon={faHome} />
              &nbsp;Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link menu " href="/#">
              <FontAwesomeIcon icon={faPlus} />
              &nbsp;Book
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link menu" href="/#">
              All Book
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
              Categories
            </a>
            <div
              className="dropdown-menu bg-light"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="/#">
                Horror
              </a>
              <a className="dropdown-item" href="/#">
                Religi
              </a>
              <a className="dropdown-item" href="/#">
                Romance
              </a>
              <a className="dropdown-item" href="/#">
                Tekonologi
              </a>
            </div>
          </li>
        </ul>
        <div>
          <button className="btn  badge-pill btn-outline-dark my-2 my-sm-0">
            Sign-in
          </button>
          <button className="btn  badge-pill btn-dark my-2 my-sm-0">
            Sign-up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
