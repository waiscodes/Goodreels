import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateClickedMovie } from "../actions/aActiveUser";
import { avgRating } from '../utilities/avgRating';
import { getRatingClass } from '../utilities/getRatingClass'
import "../css/MovieCard.css";

// Props Required: movieId

const MovieCard = (props) => {
  let thisMovie = {};
  let averageRating;
  let colorClass;

  for (let movie of props.movies) {
    if (movie.id === props.movieId) {
      thisMovie = { ...movie };
    }
  }



  const passInId = (e) => {
    props.dispatch(updateClickedMovie(thisMovie.id));
  };

  averageRating = avgRating(thisMovie.id, props.reviews);
  colorClass = getRatingClass(averageRating);




  




  return (
    <>
      <Link to="/Movie" onClick={passInId} className={colorClass}>
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
  reviews: state.reviews,
  state: state
}))(MovieCard);
