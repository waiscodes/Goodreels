import React from "react";
import MovieCard from "./MovieCard";
import "../css/Recommended.css";
import { connect } from "react-redux";

const Recommended = (props) => {
  console.log(props);
  return (
    <>
      <ul></ul>
    </>
  );
};
export default connect((state) => ({
  idsOfMovies: state.movies.id,
}))(Recommended);
