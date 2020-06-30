import React, { Component } from "react";
import logo from "../images/arrow.png";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 left">
            <a className="arrow" href="/#">
              <img src={logo} alt="logo..." style={{ width: "5rem" }} />
            </a>
          </div>
          <div className="col-md-5 right">
            <h1 className="h1-title">Register</h1>
            <h5>Welcome Back, Please Register To Create Account</h5>
            <form className="form-regis was-validated">
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Input Your Email"
                  required
                ></input>
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Input Your Password"
                  required
                ></input>
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  required
                ></input>
                <label className="form-check-label" for="exampleCheck1">
                  Dengan pembuatan akun, Anda menyetujui Syarat & Ketentuan
                  serta Kebijakan Privasi MyLibrary.com
                </label>
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
            <div className="privacy">
              <h6>By signing up, you agree to Book's</h6>
              <h6>
                <span className="span-color">Terms And Conditions</span> &
                <span>Privacy Policy</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
