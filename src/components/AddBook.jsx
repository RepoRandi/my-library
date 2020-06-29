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
            <h1 className="h1-title">Add Book</h1>
            <h5>Welcome Back, Please Add Book For Send New Book</h5>
            <form className="was-validated">
              <div className="form-group">
                <label for="exampleInputText1">Title</label>
                <input
                  type="text"
                  className="form-control is-invalid"
                  id="exampleInputText1"
                  aria-describedby="textHelp"
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
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="validatedCustomFile"
                    required
                  ></input>
                  <label
                    className="custom-file-label"
                    for="validatedCustomFile"
                  >
                    Choose Image...
                  </label>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group is-invalid">
                  <div className="input-group-prepend">
                    <label
                      class="input-group-text"
                      for="validatedInputGroupSelect"
                    >
                      Genre
                    </label>
                  </div>
                  <select
                    className="custom-select"
                    id="validatedInputGroupSelect"
                    required
                  >
                    <option value="">Choose...</option>
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
                      Author
                    </label>
                  </div>
                  <select
                    className="custom-select"
                    id="validatedInputGroupSelect"
                    required
                  >
                    <option value="">Choose...</option>
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
                      Status
                    </label>
                  </div>
                  <select
                    className="custom-select"
                    id="validatedInputGroupSelect"
                    required
                  >
                    <option value="">Choose...</option>
                    <option value="1">Available</option>
                    <option value="2">Not Available</option>
                  </select>
                </div>
              </div>
              <div className="form-group ">
                <button
                  type="submit"
                  className="btn btn-sub badge-pill sub btn-dark"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

export default AddBook;
