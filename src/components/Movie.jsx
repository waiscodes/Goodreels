import React from "react";
import AddReview from "./AddReview";
import ListReviews from "./ListReviews";
import { connect } from "react-redux";
import { avgRating } from "../utilities/avgRating";
import { getRatingClass } from "../utilities/getRatingClass";
import { Redirect } from "react-router-dom";

import "../css/Movie.css";

const Movie = (props) => {
  // receives props.movieId as prop

  let thisMovie;
  let reviewsCopy = [...props.reviews];
  let averageRating;
  let colorClass;

  // Find the movie with matching ID to pull out info from store into my variable
  for (const movie of props.movies) {
    if (movie.id === props.activeUser.clickedMovie) {
      thisMovie = { ...movie };
    }

    if (!thisMovie) thisMovie = props.movies[props.movies.length - 1];
  }

  // Calculates average movie rating and assigns class based on it
  averageRating = avgRating(thisMovie.id, reviewsCopy);
  colorClass = getRatingClass(averageRating);

  // Return HTML element with movie's info
  if (props.activeUser.username !== undefined) {
    return (
      <>
        <div className="row1">
          <div className="info">
            <h2>{thisMovie.title}</h2>
            <em>{thisMovie.year}</em>
            <p id="rating">{averageRating}</p>
            <p>{thisMovie.genre}</p>
          </div>

          <img
            src={require("../img/" + thisMovie.image)}
            alt="Movie Poster"
            className={colorClass}
          />
        </div>

        <p className="row2">{thisMovie.synopsis}</p>

        <section className="add-review">
          <AddReview />
        </section>

        <section className="reviews-list">
          <ListReviews movieId={thisMovie.id} />
        </section>
      </>
    );
  } else return <Redirect to="/" />;
};
export default connect((state) => ({
  movies: state.movies,
  reviews: state.reviews,
  activeUser: state.activeUser,
}))(Movie);
