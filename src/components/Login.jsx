import React, { Component } from "react";
import axios from "axios";
import logo from "../images/arrow.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      books: [],
    };
  }

  getAllBook = () => {
    const token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: "http://localhost:3000/mybook",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response);
        this.setState({
          books: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  handleLogin = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3000/auth/login",
      data: {
        username: this.state.username,
        password: this.state.password,
      },
    })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.data[0].token);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  componentDidMount() {
    this.getAllBook();
  }

  render() {
    return (
      <div className="container-fluid" onSubmit={this.handleLogin}>
        <div className="row">
          <div className="col-md-7 left">
            <a className="arrow" href="/#">
              <img src={logo} alt="logo..." style={{ width: "5rem" }} />
            </a>
          </div>
          <div className="col-md-5 right">
            <h1 className="h1-title">Login</h1>
            <h5>Welcome Back, Please Login To Your Account</h5>
            <form className="form-regis">
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={this.state.username}
                  onChange={(e) => this.setState({ username: e.target.value })}
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
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                ></input>
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                ></input>
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <div className="form-group ">
                <button
                  type="submit"
                  className="btn btn-sub badge-pill sub btn-dark"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="privacy">
              <h6>By signing up, you agree to Book's</h6>
              <h6>
                <span>Terms And Conditions</span> & <span>Privacy Policy</span>
              </h6>
            </div>
          </div>
        </div>
      </div>

      // <div>
      //   <h1>Login</h1>
      //   <form onSubmit={this.handleLogin}>
      //     <div>
      //       <label>Username</label>
      //       <input
      //         type="text"
      //         value={this.state.username}
      //         onChange={(e) => this.setState({ username: e.target.value })}
      //       ></input>
      //     </div>
      //     <div>
      //       <label>Password</label>
      //       <input
      //         type="password"
      //         value={this.state.password}
      //         onChange={(e) => this.setState({ password: e.target.value })}
      //       ></input>
      //     </div>
      //     <div>
      //       <input
      //         className="btn btn-primary mb-2"
      //         type="submit"
      //         value="login"
      //       ></input>
      //     </div>
      //   </form>
      //   {/* {this.state.books.map((Book) => {
      //     return (
      //       <Book
      //         key={Book.id}
      //         title={Book.title}
      //         description={Book.description}
      //       />
      //     );
      //   })} */}
      // </div>
    );
  }
}

export default Login;
