import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';


const ListReviews = (props) => {

    

    // If Movie id is passed, list reviews for given movie
    if (props.movieId !== undefined){
        
        let sortedReviews = [];

        for (const review of props.reviews){
            if (review.movieId === props.movieId)
            {
                
                if (review.username === props.activeUser.username){
                    sortedReviews.splice(0,0,review)
                }
                else sortedReviews.push(review);
            }
        }

        




        return (

            <>
                <h2>Reviews</h2>
                <ul id="review-list">
                    {sortedReviews.map( review => {

                        // If the Movie ID passed from props matches in review, it will Pull the info
                        
                            return(
                                <li key={review.id}> <strong>{review.username} ({review.rating}/10) : </strong>
                                    {review.review}
                                </li>
                            );

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
                                <li key={review.id}> 
                                
                                    <MovieCard movieId={review.movieId}/>
                                    <strong>{review.rating}</strong>
                                    
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
export default connect (state => ({reviews: state.reviews, activeUser: state.activeUser}) )(ListReviews);