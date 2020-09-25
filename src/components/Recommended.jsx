import React from "react";
import MovieCard from "./MovieCard";
import "../css/Recommended.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Recommended = (props) => {
  if (props.activeUser.username !== undefined) {
    return (
      <>
        <section className="main-section">
          <ul>
            {props.movies.map((movie) => {
              if (props.movies.indexOf(movie) < 5) {
                return (
                  <li key={movie.id}>
                    <MovieCard movieId={movie.id} />
                  </li>
                );
              } else return "";
            })}
          </ul>
        </section>
      </>
    );
  } else return <Redirect to="/Browse" />;
};
export default connect((state) => ({
  movies: state.movies,
  activeUser: state.activeUser,
}))(Recommended);
