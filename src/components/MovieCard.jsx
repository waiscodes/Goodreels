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
        <h2>{props.title}</h2>
        <p>{props.year}</p>
        <img src={props.image} alt="" />
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
