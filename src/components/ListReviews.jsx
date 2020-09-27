import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import { removeReview } from '../actions/aReviews';


const ListReviews = (props) => {




    // If Movie id is passed, list reviews for given movie
    if (props.movieId !== undefined) {

        let sortedReviews = [];

        for (const review of props.reviews) {
            if (review.movieId === props.movieId) {

                if (review.username === props.activeUser.username) {
                    sortedReviews.splice(0, 0, review)
                }
                else sortedReviews.push(review);
            }
        }

        return (

            <>
                <ul id="review-list">
                    {sortedReviews.map(review => {

                        // If the Movie ID passed from props matches in review, it will Pull the info

                        return (
                            <li key={review.id}>
                                <strong>
                                    {review.username}: {review.rating}/10
                                    </strong>
                                <br />
                                {review.review}
                            </li>
                        );

                    })}
                </ul>
            </>

        );
    }

    // If username is passed, list reviews for given user
    else if (props.username !== undefined) {



        return (

            <>
                <ul id="review-list">
                    {props.reviews.map(review => {

                        // If the Movie ID passed from props matches in review, it will Pull the info
                        if (review.username === props.username) {
                            return (
                                <li key={review.id}>

                                    <MovieCard movieId={review.movieId} />

                                    <div className="p-review-info">
                                        <strong>Rating: {review.rating}/10</strong>
                                        <p>{review.review}</p>
                                        <button type="button" className="delete-review-button" onClick={props.dispatch(removeReview(review.id))}>Delete</button>
                                    </div>


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
export default connect(state => ({ reviews: state.reviews, activeUser: state.activeUser }))(ListReviews);