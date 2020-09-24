import React from 'react';
import { addReview } from '../actions/aReviews';
import { useState } from 'react';
import { connect } from 'react-redux';


const AddReview =  (props) =>
{
    
    const [review, setnewReview] = useState( '' );
    const [rating, setnewRating] = useState( '' );

    const newAddition = event => {
        event.preventDefault();
        props.dispatch( addReview(props.activeUser.clickedMovie, props.activeUser.username, rating, review)  );
    }

    return (

        <>
        <form onSubmit={newAddition}>
            <label htmlFor="mreview">Your Review:</label>
                <input type="textarea" id="mreview" placeholder="Start typing your review..." required
                    onChange={e => { setnewReview( e.target.value ) } }
                    value={review}/>

            <label htmlFor="rating">Pick a rating number*:</label>
                <select id="rating" required
                    onChange={e => { setnewRating( e.target.value ) } }
                    value={rating}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <button>Submit</button>
                       
            </form>

            <p>* 1 = waste of time, 10 = absolutely fantastic.</p>
        </>

    );
    
}
export default connect (state => ({activeUser: state.activeUser}) )(AddReview);