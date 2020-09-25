import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateClickedMovie } from "../actions/aActiveUser";
<<<<<<< HEAD
import { avgRating } from '../utilities/avgRating';
=======
import "../css/MovieCard.css";
>>>>>>> 53ec10eade8cda3264fd3334c6400edf35f6a3d3

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

  const




  return (
    <>
      <Link to="/Movie" onClick={passInId}>
        <div className="movie-card">
          <h2>{thisMovie.title}</h2>
          <p>{thisMovie.year}</p>
          <img src={require(`../img/${thisMovie.image}`)} alt="" />
        </div>
      </Link>
    </>
  );
};
export default connect((state) => ({
  movies: state.movies,
<<<<<<< HEAD
  reviews: state.reviews,
  state: state
=======
  state: state,
>>>>>>> 53ec10eade8cda3264fd3334c6400edf35f6a3d3
}))(MovieCard);
