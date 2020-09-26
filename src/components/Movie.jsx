import React from 'react';
import AddReview from './AddReview';
import ListReviews from './ListReviews';
import { connect } from 'react-redux';
import {avgRating} from '../utilities/avgRating';
import { Redirect } from 'react-router-dom';
import '../css/Movie.css';
import styled from 'styled-components';
export const Grid = styled.div`

`;
export const Row = styled.div`
    display: flex;
`;

export const Col = styled.div`
    flex: ${(props) => props.size};
`;



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
            <Grid>
                <Row>
                    
                    <Col size={1} className="col1"><img src={require('../img/'+thisMovie.image)}alt="Movie Poster" className="poster" /></Col>
                    <Col size={1} className="second" ><h2>{thisMovie.title}</h2>
                                  <em>Release year: {thisMovie.year}</em>
                                  <div id="rating">Average Rating: {avgRating(thisMovie.id, reviewsCopy)}</div>
                                  <div className="genre">Movie Genre: {thisMovie.genre}</div></Col>
                    
                </Row>
                <Row>                    
                    <Col size={1}><p className="msynopsis">Synopsis: {thisMovie.synopsis}</p></Col>
                </Row>
                <Row>
                    <Col size={1}><AddReview /></Col>
                </Row>
                <Row> 
                    <Col size={1}><ListReviews className="listreviews" movieId={thisMovie.id} /></Col>
                </Row>
     
            </Grid>
        </ >
        
        );
    }
    else return (
        <Redirect to="/" />
    );
}
export default connect( state => ({movies: state.movies, reviews: state.reviews, activeUser: state.activeUser}) )(Movie);