import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../redux/actions/auth";
import logo from "../images/arrow.png";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      role: 0,
    };
  }

  handleRegister = (event) => {
    event.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
      role: this.state.role,
    };
    console.log(data);
    this.props.register(data).then(() => {
      this.props.history.push("/login");
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 left">
            <a className="arrow" href="/">
              <img src={logo} alt="logo..." style={{ width: "5rem" }} />
            </a>
          </div>
          <div className="col-md-5 right">
            <h1 className="h1-title">Register</h1>
            <h5>Welcome Back, Please Register To Create Account</h5>
            <form
              className="form-regis was-validated"
              onSubmit={this.handleRegister}
            >
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Input Your Email"
                  required
                  value={this.state.username}
                  onChange={(e) => this.setState({ username: e.target.value })}
                ></input>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Input Your Password"
                  required
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                ></input>
              </div>
              <div className="form-group">
                <div className="input-group is-invalid">
                  <div className="input-group-prepend">
                    <label className="input-group-text" for="role">
                      Choose
                    </label>
                  </div>
                  <select
                    className="custom-select"
                    id="role"
                    required
                    value={this.state.role}
                    onChange={(e) => this.setState({ role: e.target.value })}
                  >
                    <option value="0">Role...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
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

// export default Register;
const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { register };

const routePush = withRouter(Register);

export default connect(mapStateToProps, mapDispatchToProps)(routePush);
