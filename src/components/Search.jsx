import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container justify-content-center">
        <form>
          <div className="input-group mb-3">
            <input
              className="form-control "
              type="search"
              placeholder="Search Books"
              aria-label="Search"
            />
            <div class="input-group-append">
              <button
                className="btn search badge-pill btn-outline-dark "
                type="submit"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
