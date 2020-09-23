import React from 'react';
import AddReview from './AddReview';
import ListReviews from './ListReviews';
import { connect } from 'react-redux';
import '../css/Movie.css';



const Movie = (props, movieId) => {

    let thisMovie;
    let thisMovieRating = 0;
    let numberOfRatings = 0;

    // Find the movie with matching ID to pull out info from store into my variable
    for (const movie of props.movies){

        if (movie.id === movieId) {
            thisMovie = {...movie};
        }

        // testing only
        if (!thisMovie) thisMovie = props.movies[props.movies.length-1];

    }
    


    // Find all matching reviews to get ratings, adds total movie rating and totals number of ratings
    for (const review of props.reviews){

        if (review.movieId === thisMovie.id) {
            thisMovieRating += parseFloat(review.rating);
            numberOfRatings++;
        }

    }

    // Calculates rating average
    thisMovieRating =  (thisMovieRating / numberOfRatings).toFixed(1);


    // Return HTML element with movie's info
    return (
        <>

            <h2>{thisMovie.title}</h2>
            <em>{thisMovie.year}</em>
            <div id="rating">{thisMovieRating}</div>
            <img src={require('../img/'+thisMovie.image)}alt="Movie Poster" />
            <p>{thisMovie.genre}</p>
            <p>{thisMovie.synopsis}</p>
            {
                
            }

            <ul>
                <ListReviews movieId={thisMovie.id} />
            </ul>
        </>
    );
}
export default connect( state => ({movies: state.movies, reviews: state.reviews}) )(Movie);