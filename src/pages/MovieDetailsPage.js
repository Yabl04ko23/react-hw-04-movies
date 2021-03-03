import React, { Component, lazy } from "react";
import apiFetch from "../services/api";
import { Link, Route, Switch } from "react-router-dom";
import routes from "../routes";
import PropTypes from "prop-types";

const Cast = lazy(() => import("../components/Cast"));
const Reviews = lazy(() => import("../components/Reviews"));

class MovieDetailsPage extends Component {
  state = {
    filmes: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    apiFetch.fetchGetInfoAboutFilm(movieId).then((response) => {
      this.setState(() => {
        return { filmes: response.data };
      });
    });
  }

  handleGoback = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      history.push(location.state.from);
      return;
    }
    history.push(routes.home);
  };

  render() {
    const { filmes } = this.state;
    const { url } = this.props.match;
    const posterURL = `https://image.tmdb.org/t/p/w300`;
    return (
      <>
        {filmes && (
          <>
            <button className="btnGoback" onClick={this.handleGoback}>
              &#8592; Go back
            </button>
            <div className="filmInfo">
              <img src={`${posterURL}${filmes.poster_path}`} alt={filmes.title} />
              <div className="detailedInfo">
                <h2>
                  {filmes.title} ({filmes.release_date.substr(0, 4)})
                </h2>
                <span>User score: {filmes.vote_average * 10}%</span>
                <h3>Overview</h3>
                <p className="filmOverview">{filmes.overview}</p>
                <h3>Genres</h3>
                <div>
                  {filmes.genres.map((item) => {
                    return (
                      <span className="genre" key={item.id}>
                        {item.name}{" "}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <span>Additional information:</span>
              <ul>
                <li>
                  <Link className="addInfoText" to={`${url}/cast`}>
                    Cast
                  </Link>
                </li>
                <li>
                  <Link className="addInfoText" to={`${url}/reviews`}>
                    Reviews
                  </Link>
                </li>
              </ul>
              <Switch>
                <Route path={routes.cast} component={Cast} />
                <Route path={routes.reviews} component={Reviews} />
              </Switch>
            </div>
          </>
        )}
      </>
    );
  }
}

MovieDetailsPage.propTypes = {
  movieId: PropTypes.string,
  url: PropTypes.string,
  form: PropTypes.object,
  history: PropTypes.object,
};

export default MovieDetailsPage;
