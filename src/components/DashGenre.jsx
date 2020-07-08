import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faBook,
  faUserSecret,
  faBookOpen,
  faBookReader,
  faEnvelope,
  faSignOutAlt,
  faBell,
  faTrash,
  faEdit,
  faAddressBook,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
import img1 from "../images/dilan.jpg";

class DashGenre extends Component {
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
          {/* Content Table */}
          <div className="col-md-10 p-4 pl-5 ">
            <h3>
              <FontAwesomeIcon icon={faBookOpen} />
              &nbsp;List Genre
            </h3>
            <hr />
            <a
              href="/#"
              className="btn btn-primary mb-3"
              data-toggle="modal"
              data-target="#modalAdd"
            >
              <FontAwesomeIcon icon={faPlusSquare} />
              &nbsp;Add Data
            </a>
            <table class="table table-striped table-dark table-bordered">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Id Genre</th>
                  <th scope="col">Id Author</th>
                  <th scope="col">Status </th>
                  <th scope="col">Image</th>
                  <th colSpan="2" scope="col">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Dilan</td>
                  <td>Lorem ipsum dolor</td>
                  <td>1</td>
                  <td>1</td>
                  <td className="text-success">Available</td>
                  <td>
                    <img src={img1} alt="img..." style={{ width: "8rem" }} />
                  </td>
                  <td>
                    <a
                      href="/#"
                      className="btn btn-success rounded"
                      data-toggle="modal"
                      data-target="#modalEdit"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </a>
                  </td>
                  <td>
                    <a
                      href="/#"
                      className="btn btn-danger rounded"
                      data-toggle="modal"
                      data-target="#modalDelete"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </a>
                  </td>
                </tr>

                <tr>
                  <th scope="row">2</th>
                  <td>Dilan</td>
                  <td>Lorem ipsum dolor</td>
                  <td>1</td>
                  <td>1</td>
                  <td className="text-success">Available</td>
                  <td>
                    <img src={img1} alt="img..." style={{ width: "8rem" }} />
                  </td>
                  <td>
                    <a
                      href="/#"
                      className="btn btn-success"
                      data-toggle="modal"
                      data-target="#modalEdit"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </a>
                  </td>
                  <td>
                    <a
                      href="/#"
                      className="btn btn-danger"
                      data-toggle="modal"
                      data-target="#modalDelete"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </a>
                  </td>
                </tr>

                <tr>
                  <th scope="row">3</th>
                  <td>Dilan</td>
                  <td>Lorem ipsum dolor</td>
                  <td>1</td>
                  <td>1</td>
                  <td className="text-success">Available</td>
                  <td>
                    <img src={img1} alt="img..." style={{ width: "8rem" }} />
                  </td>
                  <td>
                    <a
                      href="/#"
                      className="btn btn-success"
                      data-toggle="modal"
                      data-target="#modalEdit"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </a>
                  </td>
                  <td>
                    <a
                      href="/#"
                      className="btn btn-danger"
                      data-toggle="modal"
                      data-target="#modalDelete"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </a>
                  </td>
                </tr>

                <tr>
                  <th scope="row">4</th>
                  <td>Dilan</td>
                  <td>Lorem ipsum dolor</td>
                  <td>1</td>
                  <td>1</td>
                  <td className="text-success">Available</td>
                  <td>
                    <img src={img1} alt="img..." style={{ width: "8rem" }} />
                  </td>
                  <td>
                    <a
                      href="/#"
                      className="btn btn-success"
                      data-toggle="modal"
                      data-target="#modalEdit"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </a>
                  </td>
                  <td>
                    <a
                      href="/#"
                      className="btn btn-danger"
                      data-toggle="modal"
                      data-target="#modalDelete"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Batas Content Table */}
          {/* Modal Add */}
          <div
            className="modal fade"
            id="modalAdd"
            role="dialog"
            aria-labelledby="modalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Book</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form className="was-validated">
                    <div className="form-group">
                      <label for="titleDetail">Title</label>
                      <input
                        type="text"
                        name=""
                        id="titleDetail"
                        className="form-control"
                        placeholder="Input Title"
                        required
                      ></input>
                    </div>
                    <div className="form-group">
                      <label for="descripDetail">Description</label>
                      <textarea
                        className="form-control is-invalid"
                        id="descripDetail"
                        placeholder="Input Description"
                        required
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label for="uploadDetail">Upload Image</label>
                      <input
                        type="file"
                        className="form-control-file is-invalid"
                        id="uploadDetail"
                        required
                      ></input>
                      <small className="form-text text-muted">
                        Upload Image Maks 2 Mb
                      </small>
                    </div>
                    <div className="form-group">
                      <div className="input-group is-invalid">
                        <div className="input-group-prepend">
                          <label class="input-group-text" for="genreDetail">
                            Choose
                          </label>
                        </div>
                        <select
                          className="custom-select"
                          id="genreDetail"
                          required
                        >
                          <option value="">Genre...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group is-invalid">
                        <div className="input-group-prepend">
                          <label class="input-group-text" for="authorDeail">
                            Choose
                          </label>
                        </div>
                        <select
                          className="custom-select"
                          id="authorDeail"
                          required
                        >
                          <option value="">Author...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group is-invalid">
                        <div className="input-group-prepend">
                          <label
                            className="input-group-text"
                            for="statusDetail"
                          >
                            Choose
                          </label>
                        </div>
                        <select
                          className="custom-select"
                          id="statusDetail"
                          required
                        >
                          <option value="">Status...</option>
                          <option value="Available">Available</option>
                          <option value="Not Available">Not Available</option>
                        </select>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                      <button type="reset" className="btn btn-danger">
                        Reset
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Batas Modal Add */}

          {/* Modal Edit */}
          <div
            className="modal fade"
            id="modalEdit"
            role="dialog"
            aria-labelledby="modalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Book</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form className="was-validated">
                    <div className="form-group">
                      <label for="titleDetail">Title</label>
                      <input
                        type="text"
                        name=""
                        id="titleDetail"
                        className="form-control"
                        placeholder="Input Title"
                        required
                      ></input>
                    </div>
                    <div className="form-group">
                      <label for="descripDetail">Description</label>
                      <textarea
                        className="form-control is-invalid"
                        id="descripDetail"
                        placeholder="Input Description"
                        required
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label for="uploadDetail">Upload Image</label>
                      <input
                        type="file"
                        className="form-control-file is-invalid"
                        id="uploadDetail"
                        required
                      ></input>
                      <small className="form-text text-muted">
                        Upload Image Maks 2 Mb
                      </small>
                    </div>
                    <div className="form-group">
                      <div className="input-group is-invalid">
                        <div className="input-group-prepend">
                          <label className="input-group-text" for="genreDetail">
                            Choose
                          </label>
                        </div>
                        <select
                          className="custom-select"
                          id="genreDetail"
                          required
                        >
                          <option value="">Genre...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group is-invalid">
                        <div className="input-group-prepend">
                          <label className="input-group-text" for="authorDeail">
                            Choose
                          </label>
                        </div>
                        <select
                          className="custom-select"
                          id="authorDeail"
                          required
                        >
                          <option value="">Author...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group is-invalid">
                        <div className="input-group-prepend">
                          <label
                            className="input-group-text"
                            for="statusDetail"
                          >
                            Choose
                          </label>
                        </div>
                        <select
                          className="custom-select"
                          id="statusDetail"
                          required
                        >
                          <option value="">Status...</option>
                          <option value="Available">Available</option>
                          <option value="Not Available">Not Available</option>
                        </select>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                      <button type="reset" className="btn btn-danger">
                        Reset
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Batas Modal Edit */}
          {/* Modal Delete */}
          <div
            class="modal fade"
            id="modalDelete"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div
                  class="modal-body text-center font-weight-bold"
                  style={{ fontSize: "2rem" }}
                >
                  You sure delete this data
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger">
                    Delete
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Batas Modal Delete */}
        </div>
      </div>
    );
  }
}

export default DashGenre;
