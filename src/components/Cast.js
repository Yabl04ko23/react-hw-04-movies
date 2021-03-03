import React, { Component } from "react";
import apiFetch from "../services/api";
import PropTypes from "prop-types";

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount = () => {
    const { movieId } = this.props.match.params;
    apiFetch.fetchCastInfo(movieId).then((response) => {
      this.setState(() => {
        return { cast: response.data.cast };
      });
    });
  };

  render() {
    const { cast } = this.state;
    return (
      <>
        <ul className="cast">
          {cast.map((item) => {
            return (
              <div className="castItem" key={item.id}>
                <img className="castImg" src={`https://image.tmdb.org/t/p/w300${item.profile_path}`} alt={item.name} />
                <h3>{item.name}</h3>
                <h3>Character: {item.character}</h3>
              </div>
            );
          })}
        </ul>
      </>
    );
  }
}

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;
