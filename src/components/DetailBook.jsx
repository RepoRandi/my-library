import React, { Component } from "react";
import logo from "../images/arrow.png";
import img from "../images/Detail2.png";

class DetailBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md detail1">
            <a className="arrow-detail" href="/#">
              <img src={logo} alt="logo..." style={{ width: "5rem" }} />
            </a>
          </div>
        </div>
        <br></br>
        <div className="row">
          {/* Kolom Kiri */}
          <div className="col-md-7">
            <button
              type="submit"
              className="btn btn-sub badge-pill btn-warning disabled"
            >
              Novel
            </button>
            <h1>DILAN 1990</h1>
            <h5>30 Juni 2019</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium nostrum labore suscipit aliquid? Nostrum, quis
              deleniti eveniet tenetur, expedita quae minima fugit dolorem
              dolore cupiditate illum! Quaerat soluta at nisi debitis eaque
              impedit enim et tempora amet. Rem voluptatibus excepturi quisquam
              magni reiciendis pariatur officia facilis ea, alias laborum
              aliquid inventore, libero, quos eligendi aut eum. Sit asperiores
              adipisci cumque non facilis, sequi, minima laborum distinctio et
              officia incidunt doloribus voluptatibus ipsa quas enim optio sunt
              unde explicabo laboriosam sed quaerat blanditiis? Eligendi aliquam
              id fugit optio veritatis placeat inventore officia cumque
              voluptatum. Eum sint repudiandae culpa vel cupiditate quo.
            </p>
          </div>
          {/* Kolom Tengah */}
          <div className="col-md-2">
            <h3 className="text-success text-center">Available</h3>
          </div>
          {/* Kolom Kanan */}
          <div className="col-md-3">
            <div className="detail-img">
              <img src={img} alt="img" style={{ width: "14rem" }} />
            </div>
            <div className="menu-detail">
              <button type="submit" className="btn borrow btn-warning">
                Borrow
              </button>
              <button
                type="submit"
                className="btn edit btn-success"
                data-toggle="modal"
                data-target="#modalEdit"
              >
                Edit
              </button>
              <button type="submit" className="btn delete btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
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
                        <label class="input-group-text" for="statusDetail">
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
      </div>
    );
  }
}

export default DetailBook;
