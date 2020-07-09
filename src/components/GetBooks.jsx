import React, { Component } from "react";
import { connect } from "react-redux";
import { getBook } from "../redux/actions/book";
import ListBook from "./ListBook";

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
        {/* <Table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Image</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {this.props.book.data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.image}</td>
                  <td>{item.genre}</td>
                  <td>
                    <img src={item.image} alt="img" className="card-img-top" />
                  </td>   
                </tr>
              );
            })}
          </tbody>
        </Table> */}
        <div className="container-fluid">
          <h3>List Book</h3>
        </div>
        <div className="row">
          {this.props.book.data.map((item, index) => {
            return (
              <ListBook
                key={item.id}
                title={item.title}
                image={item.image}
                author={item.author}
              />
            );
          })}
        </div>
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
