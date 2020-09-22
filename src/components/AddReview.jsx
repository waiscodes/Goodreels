import React from 'react';
import { addReview } from '../actions/aReviews';
import { useState } from 'react';


function AddReview  ( props ) 
{

    const [newTitle, setnewTitle] = useState( '' );
    const [newReview, setnewReview] = useState( '' );
    const [newRating, setnewRating] = useState( '' );

    const newAddition = event => {
        event.preventDefault();
        props.dispatch( addReview ( newTitle, newReview, newRating) );
    }

    return (

        <>
        <form onSubmit={newAddition}>
            <p><label htmlFor="mtitle">Movie Title:</label></p>
                <input type="text" id="mtitle" placeholder="Enter Name of Movie" required
                onChange={e => { setnewTitle( e.target.value ) } }
                value={newTitle}/>
            
            <p><label htmlFor="mreview">Your Review:</label></p>
                <input type="textarea" id="mreview" placeholder="Start typing your review..." required
                onChange={e => { setnewReview( e.target.value ) } }
                value={newReview}/>

            <p><label htmlFor="rating">Pick a rating number*:</label></p>
                <select id="rating" required
                onChange={e => { setnewRating( e.target.value ) } }
                value={newRating}>
                <option value="1"> </option>
                <option value="2">+</option>
                <option value="3">-</option>
                <option value="4">*</option>
                <option value="5">/</option>
                <option value="6"> </option>
                <option value="7">+</option>
                <option value="8">-</option>
                <option value="9">*</option>
                <option value="10">/</option>
                </select>
            
            <p><button>Submit</button></p>
                       
            </form>

            <p>* 1 = waste of time, 10 = absolutely fantastic.</p>
        </>

    );
    
}
export default AddReview;