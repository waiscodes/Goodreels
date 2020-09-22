import React from 'react';


function ListReviews ( props ) {


    return (

        <>
        <ul>
    {props.listReviews.map( ( listReview, index ) => <li key={index}>{listReview.newTitle, listReview.newReview, listReview.newRating}</li> )}

            </ul>
        </>

    );
    
}
export default ListReviews;