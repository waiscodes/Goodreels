import React from "react";
import MovieCard from "./MovieCard";
import "../css/Recommended.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Recommended = (props) => {

  // If user is logged in, show recommended movies, otherwise redirect to Sign In
  if (props.activeUser.username !== undefined) {

    return (
      <>
        <section className="main-section">
          <ul>
            {props.movies.map((movie) => {
              // Find the first 5 movies (Always our recommended 5), return those
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
  } 
  else return <Redirect to="/Browse" />;
};
export default connect((state) => ({
  movies: state.movies,
  activeUser: state.activeUser,
}))(Recommended);
