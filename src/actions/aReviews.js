


const addReview = (movieId, userId, rating, review) => {


    return {
        type: "ADD_REVIEW",
        movieId,
        userId,
        rating,
        review        
    };
}

const removeReview = (id) => {

    return {
        type: "REMOVE_REVIEW",
        id: id
    };
}
export { addReview, removeReview };