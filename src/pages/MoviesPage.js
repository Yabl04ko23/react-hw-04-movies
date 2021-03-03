import React, { Component } from "react";
import apiFetch from "../services/api";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class MoviesPage extends Component {
  state = {
    filmes: [],
    query: "",
  };

  handleChange = (evt) => {
    const { value } = evt.target;
    this.setState({ query: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { query } = this.state;
    apiFetch.fetchFilmesWithQuery(query).then((response) => {
      this.setState(() => {
        return { filmes: response.data.results };
      });
    });
  };

  render() {
    const { filmes } = this.state;
    const { match, location } = this.props;
    return (
      <>
        <header>
          <form onSubmit={this.handleSubmit}>
            <input type="text" autoComplete="off" autoFocus onChange={this.handleChange} />
            <button type="submit">Search</button>
          </form>
        </header>
        <ul>
          {filmes.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  key={item.id}
                  to={{ pathname: `${match.url}/${item.id}`, state: { from: location } }}
                >
                  {item.original_title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

MoviesPage.propTypes = {
  url: PropTypes.string,
  location: PropTypes.object
};

export default MoviesPage;
