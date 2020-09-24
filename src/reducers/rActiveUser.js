



const rActiveUser = (state = {}, action) => {

    
    switch (action.type){
        
        case "LOG_IN_USER":

            return {...state, username: action.username};
        
        case "UPDATE_CLICKED_MOVIE":
        
            return {...state, clickedMovie: action.movieId}

        default:
            return state;

    }

}
export default rActiveUser;
