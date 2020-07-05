import React, { Component } from "react";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import { getBook } from "../redux/actions/book";

class GetBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  getAllBook = () => {
    const token = this.props.auth.data.token;
    this.props.getBook(token);
  };

  componentDidMount() {
    this.getAllBook();
  }

  render() {
    return (
      <div>
        <h1>Book</h1>
        <Table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Image</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {this.props.book.data.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.image}</td>
                  <td>{item.genre}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  book: state.book,
});

const mapDispatchToProps = { getBook };

export default connect(mapStateToProps, mapDispatchToProps)(GetBooks);
