import React from "react";
import MovieCard from "./MovieCard";
import "../css/Recommended.css";
import { connect } from "react-redux";

const Recommended = (props) => {
  console.log(props);
  return (
    <>
      <ul>
        {props.movies.map((movie) => {
          return (
            <li key={movie.id}>
              <MovieCard movieId={movie.id} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default connect((state) => ({
  movies: state.movies,
}))(Recommended);
