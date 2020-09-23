import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Props Required: movieId

const MovieCard = (props) => {
  const thisMovie = {};

  for (let movie of props.movies) {
    if (movie.id == props.movieId) {
      thisMovie = { ...movie };
    }
  }

  const passInId = (e) => {
    // props.state.dispatch();
    // Clicked movie as an object
  };

  return (
    <>
      <Link to="/Movies" onClick={passInId()}>
        <div>
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
  state: state,
}))(MovieCard);
