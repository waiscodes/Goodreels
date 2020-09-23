import React from 'react';
import { connect } from 'react-redux';


const ListReviews = (props) => {

    // If Movie id is passed, list reviews for given movie
    if (props.movieId !== undefined){
        
        return (

            <>
                <h2>Reviews</h2>
                <ul id="review-list">
                    {props.reviews.map( review => {

                        // If the Movie ID passed from props matches in review, it will Pull the info
                        if (review.movieId === props.movieId){
                            return(
                                <li key={review.id}> <strong>{review.username} ({review.rating}/10) : </strong>
                                    {review.review}
                                </li>
                            );
                        }
                        else
                        return "";

                    })}
                </ul>
            </>
    
        );
    }

    // If username is passed, list reviews for given user
    else if (props.username !== undefined){
        
        return (

            <>
                <h2>Your Reviews</h2>
                <ul id="review-list">
                    {props.reviews.map( review => {

                        // If the Movie ID passed from props matches in review, it will Pull the info
                        if (review.username === props.username){
                            return(
                                <li key={review.id}> <strong>Your Rating: {review.rating}/10 : </strong>
                                    {review.review}
                                </li>
                            );
                        }
                        else
                        return "";

                    })}
                </ul>
            </>
    
        );
    }



    
    
}
export default connect (state => ({reviews: state.reviews}) )(ListReviews);