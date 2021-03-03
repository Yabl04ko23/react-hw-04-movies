import React, { Component } from "react";
import apiFetch from "../services/api";
import { Link } from "react-router-dom";

class HomePage extends Component {
  state = {
    filmes: [],
  };

  componentDidMount = () => {
    apiFetch.fetchFilmesOfHomePage().then((response) => {
      this.setState(() => {
        return { filmes: response.data.results };
      });
    });
  };

  render() {
    const { filmes } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {filmes.map((item) => {
            return (
              <li key={item.id}>
                <Link key={item.id} to={`/movies/${item.id}`}>
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

export default HomePage;
