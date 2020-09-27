

const avgRating = (movieId = "", reviews = []) => {

    let thisMovieRating = 0;
    let numberOfRatings = 0;

    // Find all matching reviews to get ratings, adds total movie rating and totals number of ratings
    for (const review of reviews){

        if (review.movieId === movieId) {
            thisMovieRating += parseFloat(review.rating);
            numberOfRatings++;
        }

    }

    // Calculates rating average
    thisMovieRating =  (thisMovieRating / numberOfRatings).toFixed(1);
    
    if (thisMovieRating === NaN)
        thisMovieRating = "No ratings"
    
    return thisMovieRating;
}
export {avgRating};
 