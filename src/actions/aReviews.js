
const addReview = () => {


    return {
        type: "ADD_REVIEW"

        
    };
}

const removeReview = (id) => {

    return {
        type: "REMOVE_REVIEW",
        id: id
    };
}
export { addReview, removeReview };