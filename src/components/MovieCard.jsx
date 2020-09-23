import React from "react";
import { connect } from "react-redux";

// Props Required: movieId

const MovieCard = (props) => {
  const thisMovie = {};

  for (let movie of props.movies) {
    if (movie.id == props.movieId) {
      thisMovie = { ...movie };
    }
  }

  return (
    <>
      <div>
        <h2>{thisMovie.title}</h2>
        <p>{thisMovie.year}</p>
        <img src={`../img/${thisMovie.image}`} alt="" />
      </div>
    </>
  );
};
export default connect((state) => ({
  id: state.id,
  title: state.title,
  year: state.year,
  image: state.image,
}))(MovieCard);
