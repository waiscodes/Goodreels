



const rActiveUser = (state = {}, action) => {

    
    switch (action.type){
        
        case "LOG_IN_USER":{
            
            const loggedIn = {
                
                username: action.username
        
            };

            return loggedIn;
        }
        default:
            return state;

    }

}
export default rActiveUser;
