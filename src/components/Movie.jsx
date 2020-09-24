import React from 'react';
import AddReview from './AddReview';
import ListReviews from './ListReviews';
import { connect } from 'react-redux';
import {avgRating} from '../utilities/avgRating';
import { Redirect } from 'react-router-dom';
import '../css/Movie.css';



const Movie = (props) => {

    // receives props.movieId as prop

    let thisMovie;
    let reviewsCopy = [...props.reviews];

    // Find the movie with matching ID to pull out info from store into my variable
    for (const movie of props.movies){

        if (movie.id === props.activeUser.clickedMovie) {
            thisMovie = {...movie};
        }

        // testing only
        if (!thisMovie) thisMovie = props.movies[props.movies.length-1];

    }

    // Return HTML element with movie's info
    if (props.activeUser.username !== undefined){
        return (
            <>

                <h2>{thisMovie.title}</h2>
                <em>{thisMovie.year}</em>
                <div id="rating">{avgRating(thisMovie.id, reviewsCopy)}</div>
                <img src={require('../img/'+thisMovie.image)}alt="Movie Poster" />
                <p>{thisMovie.genre}</p>
                <p>{thisMovie.synopsis}</p>
                {
                    
                }

                <AddReview />
                <ListReviews movieId={thisMovie.id} />
                
            </>
        );
    }
    else return (
        <Redirect to="/" />
    );
}
export default connect( state => ({movies: state.movies, reviews: state.reviews, activeUser: state.activeUser}) )(Movie);