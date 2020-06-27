import React, { Component } from "react";
import axios from "axios";

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
        console.log(error);
      });
  };

  componentDidMount() {
    this.getAllBook();
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleLogin}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            ></input>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            ></input>
          </div>
          <div>
            <input
              className="btn btn-primary mb-2"
              type="submit"
              value="login"
            ></input>
          </div>
        </form>
        {/* {this.state.books.map((Book) => {
          return (
            <Book
              key={Book.id}
              title={Book.title}
              description={Book.description}
            />
          );
        })} */}
      </div>
    );
  }
}

export default Login;
