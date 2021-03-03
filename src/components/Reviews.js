import React, { Component } from "react";
import apiFetch from "../services/api";
import PropTypes from "prop-types";

class Reviews extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    const { movieId } = this.props.match.params;
    apiFetch.fetchReviewsInfo(movieId).then((response) => {
      this.setState(() => {
        return { reviews: response.data.results };
      });
    });
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((item) => {
              return (
                <div className="reviewItem" key={item.id}>
                  <li className="reviewAuthor">{item.author}</li>
                  <span>{item.content}</span>
                </div>
              );
            })}
          </ul>
        ) : (
          <h3>We don't have any reviews for this movie.</h3>
        )}
      </>
    );
  }
}

Reviews.propTypes = {
  movieId: PropTypes.string,
};

export default Reviews;
