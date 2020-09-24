import React from "react";
import MovieCard from "./MovieCard";
import "../css/Recommended.css";
import { connect } from "react-redux";

const Recommended = (props) => {

  return (
    <>
      <ul>
        {props.movies.map((movie) => {
          if (props.movies.indexOf(movie) < 5){
            return (
              <li key={movie.id}>
                <MovieCard movieId={movie.id} />
              </li>
            );
          }
          else return "";
          
        })}
      </ul>
    </>
  );
};
export default connect((state) => ({
  movies: state.movies,
}))(Recommended);
