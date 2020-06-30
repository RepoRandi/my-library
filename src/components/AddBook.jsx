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
                  <label>Title</label>
                  <input
                    type="text"
                    name=""
                    className="form-control"
                    placeholder="Required example textarea"
                    required
                  ></input>
                </div>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Description</label>
                  <textarea
                    className="form-control is-invalid"
                    id="validationTextarea"
                    placeholder="Required example textarea"
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Upload Image</label>
                  <input
                    type="file"
                    className="form-control-file is-invalid"
                    required
                  ></input>
                </div>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text"
                        id="inputGroupFileAddon01"
                      >
                        Choose
                      </span>
                    </div>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                      ></input>
                      <label class="custom-file-label" for="inputGroupFile01">
                        Upload Image...
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group is-invalid">
                    <div className="input-group-prepend">
                      <label
                        class="input-group-text"
                        for="validatedInputGroupSelect"
                      >
                        Choose
                      </label>
                    </div>
                    <select
                      className="custom-select"
                      id="validatedInputGroupSelect"
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
                      <label
                        class="input-group-text"
                        for="validatedInputGroupSelect"
                      >
                        Choose
                      </label>
                    </div>
                    <select
                      className="custom-select"
                      id="validatedInputGroupSelect"
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
                        class="input-group-text"
                        for="validatedInputGroupSelect"
                      >
                        Choose
                      </label>
                    </div>
                    <select
                      className="custom-select"
                      id="validatedInputGroupSelect"
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
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

export default AddBook;
