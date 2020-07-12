import React, { Component } from "react";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import {
  getGenre,
  postGenre,
  putGenre,
  deleteGenre,
} from "../redux/actions/genre";
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
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";

class DashGenre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "",
    };
  }

  getAllGenre = () => {
    const token = this.props.auth.data.token;
    this.props.getGenre(token);
  };

  handleAddGenre = (e) => {
    e.preventDefault();
    const data = {
      genre: this.state.genre,
    };
    const token = this.props.auth.data.token;
    this.props.postGenre(data, token).then((res) => {
      Swal.fire(
        `Insert Genre ${res.value.data.data.genre} Success!`,
        `With id : ${res.value.data.data.id}`,
        "success"
      )
        .then(() => window.location.reload())
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err,
          });
        });
    });
  };

  handlePutGenre = (e) => {
    e.preventDefault();
    const token = this.props.auth.data.token;
    const id = this.props.match.params.id;
    const data = {
      genre: this.state.genre,
    };
    this.props
      .putGenre(id, data, token)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Update Genre Success",
          showConfirmButton: true,
          timer: 1500,
        }).then((result) => {
          if (result) window.location.reload();
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
        });
      });
  };

  handleDeleteGenre = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        const token = this.props.auth.data.token;
        this.props
          .deleteGenre(id, token)
          .then((res) => {
            Swal.fire(
              "Deleted!",
              `The Genre With id : ${res.value.data.data.id} deleted.`,
              "success"
            ).then(() => window.location.reload());
          })
          .catch((err) => {
            console.log(err);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong",
            });
          });
      }
    });
  };

  componentDidMount() {
    this.getAllGenre();
  }

  render() {
    let i = 1;
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
                <a className="nav-link text-white" href="/dashboard/author">
                  <FontAwesomeIcon icon={faUserSecret} />
                  &nbsp;List Author
                </a>
                <hr className="bg-secondary" />
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/dashboard/borrow">
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
                  <th scope="col">Genre</th>
                  <th colSpan="2" scope="col" className="text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.props.genre.data.map((item) => {
                  return (
                    <tr key={item.id}>
                      <th scope="row">{i++}</th>
                      <td>{item.genre}</td>
                      <td>
                        <button
                          className="btn btn-success rounded"
                          data-toggle="modal"
                          data-target="#modalEdit"
                          data-placement="top"
                          title="EDIT"
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger rounded"
                          data-toggle="modal"
                          data-placement="top"
                          title="DELETE"
                          onClick={() => this.handleDeleteGenre(item.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
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
                  <h5 className="modal-title">Add Genre</h5>
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
                  <form
                    className="was-validated"
                    onSubmit={this.handleAddGenre}
                  >
                    <div className="form-group">
                      <label for="titleDetail">Genre</label>
                      <input
                        type="text"
                        name=""
                        id="titleDetail"
                        className="form-control"
                        placeholder="Input Genre"
                        required
                        value={this.state.genre}
                        onChange={(e) =>
                          this.setState({ genre: e.target.value })
                        }
                      ></input>
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
                  <h5 className="modal-title">Edit Genre</h5>
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
                  <form
                    className="was-validated"
                    onSubmit={this.handlePutGenre}
                  >
                    <div className="form-group">
                      <label for="titleDetail">Genre</label>
                      <input
                        type="text"
                        name=""
                        id="titleDetail"
                        className="form-control"
                        placeholder="Input Genre"
                        required
                        value={this.state.genre}
                        onChange={(e) =>
                          this.setState({ genre: e.target.value })
                        }
                      ></input>
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  genre: state.genre,
});

const mapDispatchToProps = {
  getGenre,
  postGenre,
  putGenre,
  deleteGenre,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashGenre);
