import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateClickedMovie } from "../actions/aActiveUser";
import { avgRating } from "../utilities/avgRating";
import "../css/MovieCard.css";

// Props Required: movieId

const MovieCard = (props) => {
  let thisMovie = {};
  let averageRating;

  for (let movie of props.movies) {
    if (movie.id === props.movieId) {
      thisMovie = { ...movie };
    }
  }

  averageRating = avgRating(thisMovie.movieId, props.reviews);

  const passInId = (e) => {
    props.dispatch(updateClickedMovie(thisMovie.id));
  };

  return (
    <>
      <Link to="/Movie" onClick={passInId}>
        <div className="movie-card">
          <div className="card-title">
            <h2>{thisMovie.title}</h2>
          </div>

          <div className="card-year">
            <p>{thisMovie.year}</p>
          </div>

          <div className="card-poster">
            <img src={require(`../img/${thisMovie.image}`)} alt="" />
          </div>
        </div>
      </Link>
    </>
  );
};
export default connect((state) => ({
  movies: state.movies,
  reviews: state.reviews,
  state: state,
}))(MovieCard);
