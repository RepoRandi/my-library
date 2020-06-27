import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwatchbook, faHome } from "@fortawesome/free-solid-svg-icons";
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
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link menu " href="/#">
              <FontAwesomeIcon icon={faHome} />
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link menu" href="/#">
              <FontAwesomeIcon icon={faSwatchbook} />
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
              Book List
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
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Books"
            aria-label="Search"
          />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
