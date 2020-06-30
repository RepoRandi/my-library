import React, { Component } from "react";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="header">
              <h1>Add Book</h1>
              <h5>Welcome Back, Please Add Book For Send New Book</h5>
            </div>
            <div className="body">
              <form className="was-validated">
                <div className="form-group">
                  <label for="titleAdd">Title</label>
                  <input
                    type="text"
                    name=""
                    id="titleAdd"
                    className="form-control"
                    placeholder="Input Title"
                    required
                  ></input>
                </div>
                <div className="form-group ">
                  <label for="descripAdd">Description</label>
                  <textarea
                    className="form-control is-invalid"
                    id="descripAdd"
                    placeholder="Input Description"
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label for="uploadAdd">Upload Image</label>
                  <input
                    type="file"
                    className="form-control-file is-invalid"
                    id="uploadAdd"
                    required
                  ></input>
                  <small className="form-text text-muted">
                    Upload Image Maks 2 Mb
                  </small>
                </div>
                <div className="form-group">
                  <div className="input-group is-invalid">
                    <div className="input-group-prepend">
                      <label class="input-group-text" for="genre">
                        Choose
                      </label>
                    </div>
                    <select className="custom-select" id="genre" required>
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
                      <label class="input-group-text" for="author">
                        Choose
                      </label>
                    </div>
                    <select className="custom-select" id="author" required>
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
                      <label class="input-group-text" for="status">
                        Choose
                      </label>
                    </div>
                    <select className="custom-select" id="status" required>
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
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

export default AddBook;
