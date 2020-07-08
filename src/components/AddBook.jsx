import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { postBook } from "../redux/actions/book";
import logo from "../images/arrow.png";

class AddBook extends Component {
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

  handleAddBook = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("description", this.state.description);
    formData.append("image", this.state.image[0]);
    formData.append("id_genre", this.state.id_genre);
    formData.append("id_author", this.state.id_author);
    formData.append("status", this.state.status);
    this.props.postBook(formData, this.props.auth.data.token).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 left-add">
            <a className="arrow" href="/">
              <img src={logo} alt="logo..." style={{ width: "5rem" }} />
            </a>
          </div>
          <div className="col-md-4">
            <div className="header">
              <h1>Add Book</h1>
            </div>
            <div className="body">
              <form className="was-validated" onSubmit={this.handleAddBook}>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    name=""
                    id="titleAdd"
                    className="form-control"
                    placeholder="Input Title"
                    required
                    value={this.state.title}
                    onChange={(e) => this.setState({ title: e.target.value })}
                  ></input>
                </div>
                <div className="form-group ">
                  <label>Description</label>
                  <textarea
                    className="form-control is-invalid"
                    id="descripAdd"
                    placeholder="Input Description"
                    required
                    value={this.state.description}
                    onChange={(e) =>
                      this.setState({ description: e.target.value })
                    }
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Upload Image</label>
                  <input
                    type="file"
                    className="form-control-file is-invalid"
                    id="uploadAdd"
                    required
                    onChange={(e) => this.setState({ image: e.target.files })}
                  ></input>
                  <small className="form-text text-muted">
                    Upload Image Maks 2 Mb
                  </small>
                </div>
                <div className="form-group">
                  <div className="input-group is-invalid">
                    <div className="input-group-prepend">
                      <label className="input-group-text">Choose</label>
                    </div>
                    <select
                      className="custom-select"
                      id="genre"
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
                      <label className="input-group-text">Choose</label>
                    </div>
                    <select
                      className="custom-select"
                      id="author"
                      required
                      value={this.state.id_author}
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
                      <label className="input-group-text">Choose</label>
                    </div>
                    <select
                      className="custom-select"
                      id="status"
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
          <div className="col-md-4 right-add"></div>
        </div>
      </div>
    );
  }
}

// export default AddBook;

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { postBook };

const routePush = withRouter(AddBook);

export default connect(mapStateToProps, mapDispatchToProps)(routePush);
