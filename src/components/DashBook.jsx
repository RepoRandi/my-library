import React, { Component } from "react";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { getBook, getDetailBook } from "../redux/actions/book";
import { postBook, putBook, deleteBook } from "../redux/actions/book";
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
class DashBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      image: [],
      id_genre: 0,
      id_auhor: 0,
      status: "",
    };
  }

  getAllBook = () => {
    const token = this.props.auth.data.token;
    this.props.getBook(token);
  };

  // getDetailBook = () => {
  //   const token = this.props.auth.data.token;
  //   const id = this.props.match.params.id;
  //   this.props
  //     .getDetailBook(id, token)
  //     .then(() => {
  //       this.setState({
  //         book: this.props.book.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  handleAddBook = (event) => {
    event.preventDefault();
    const token = this.props.auth.data.token;
    const formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("description", this.state.description);
    formData.append("image", this.state.image[0]);
    formData.append("id_genre", this.state.id_genre);
    formData.append("id_author", this.state.id_author);
    formData.append("status", this.state.status);
    this.props.postBook(formData, token).then((res) => {
      Swal.fire(
        `Insert Book ${res.value.data.data.title} Success!`,
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

  handlePutBook = (event) => {
    event.preventDefault();
    const token = this.props.auth.data.token;
    const id = this.props.match.params.id;
    const formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("description", this.state.description);
    formData.append("image", this.state.image[0]);
    formData.append("id_genre", this.state.id_genre);
    formData.append("id_author", this.state.id_author);
    formData.append("status", this.state.status);
    this.props
      .putBook(id, formData, token)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Update Book Success",
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

  handleDeleteBook = (event) => {
    event.preventDefault();
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
        const id = this.props.match.params.id;
        this.props
          .deleteBook(id, token)
          .then((res) => {
            Swal.fire(
              "Deleted!",
              `The Book With id : ${res.value.data.data.id} deleted.`,
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
    this.getAllBook();
    // this.getDetailBook();
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
              <FontAwesomeIcon icon={faBook} />
              &nbsp;List Books
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
            <table className="table table-striped table-dark table-bordered">
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
                {this.props.book.data.map((item) => {
                  return (
                    <tr key={item.id}>
                      <th scope="row">{i++}</th>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>{item.genre}</td>
                      <td>{item.author}</td>
                      <td>{item.status}</td>
                      <td>
                        <img
                          src={`${process.env.REACT_APP_API_URL}${item.image}`}
                          alt="img..."
                          style={{ width: "8rem" }}
                        />
                      </td>
                      <td>
                        <a
                          href="/#"
                          className="btn btn-success rounded"
                          data-toggle="modal"
                          data-target="#modalEdit"
                          data-placement="top"
                          title="EDIT"
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </a>
                      </td>
                      <td>
                        <a
                          href="/#"
                          className="btn btn-danger rounded"
                          data-toggle="modal"
                          data-placement="top"
                          title="DELETE"
                          onClick={this.handleDeleteBook}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </a>
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
                  <form className="was-validated" onSubmit={this.handleAddBook}>
                    <div className="form-group">
                      <label for="titleDetail">Title</label>
                      <input
                        type="text"
                        name=""
                        id="titleDetail"
                        className="form-control"
                        placeholder="Input Title"
                        required
                        value={this.state.title}
                        onChange={(e) =>
                          this.setState({ title: e.target.value })
                        }
                      ></input>
                    </div>
                    <div className="form-group">
                      <label for="descripDetail">Description</label>
                      <textarea
                        className="form-control is-invalid"
                        id="descripDetail"
                        placeholder="Input Description"
                        required
                        onChange={(e) =>
                          this.setState({ description: e.target.value })
                        }
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label for="uploadDetail">Upload Image</label>
                      <input
                        type="file"
                        className="form-control-file is-invalid"
                        id="uploadDetail"
                        required
                        onChange={(e) =>
                          this.setState({ image: e.target.files })
                        }
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
                          onChange={(e) =>
                            this.setState({ id_genre: e.target.value })
                          }
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
                          onChange={(e) =>
                            this.setState({ id_author: e.target.value })
                          }
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
                          onChange={(e) =>
                            this.setState({ status: e.target.value })
                          }
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
                  <form className="was-validated" onSubmit={this.handlePutBook}>
                    <div className="form-group">
                      <label for="titleDetail">Title</label>
                      <input
                        type="text"
                        name=""
                        id="titleDetail"
                        className="form-control"
                        placeholder="Input Title"
                        required
                        value={this.state.title}
                        onChange={(e) =>
                          this.setState({ title: e.target.value })
                        }
                      ></input>
                    </div>
                    <div className="form-group">
                      <label for="descripDetail">Description</label>
                      <textarea
                        className="form-control is-invalid"
                        id="descripDetail"
                        placeholder="Input Description"
                        required
                        value={this.state.description}
                        onChange={(e) =>
                          this.setState({ description: e.target.value })
                        }
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label for="uploadDetail">Upload Image</label>
                      <input
                        type="file"
                        className="form-control-file is-invalid"
                        id="uploadDetail"
                        required
                        onChange={(e) =>
                          this.setState({ image: e.target.files })
                        }
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
                          value={this.state.id_genre}
                          onChange={(e) =>
                            this.setState({ id_genre: e.target.value })
                          }
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
                          value={this.state.id_auhor}
                          onChange={(e) =>
                            this.setState({ id_auhor: e.target.value })
                          }
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
                          value={this.state.status}
                          onChange={(e) =>
                            this.setState({ status: e.target.value })
                          }
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  book: state.book,
});

const mapDispatchToProps = {
  getBook,
  getDetailBook,
  postBook,
  putBook,
  deleteBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBook);
