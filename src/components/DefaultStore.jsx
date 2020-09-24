import React from 'react';
import {connect} from 'react-redux';
import { addMovie } from "../actions/aMovies";
import { addReview } from "../actions/aReviews";
import { createProfile, updateProfile } from "../actions/aProfile";


const DefaultStore = (props) => {

    let defaultMovieIds = [];

    //////////////////////////////////
    // Movies
    //////////////////////////////////
    const fillStore = () => {
      props.dispatch(
        addMovie(
          "Catch Me If You Can",
          "2002",
          "Crime",
          "catchmeifyoucan.jpg",
          "Guy prints fake money, on the run the whole time."
        )
      );
      props.dispatch(
        addMovie(
          "Shawshank Redemption",
          "1994",
          "Crime",
          "shawshankredemption.jpg",
          "Are you gonna stay in prison if you're innocent? Or are you?"
        )
      );
      props.dispatch(
        addMovie(
          "Iron Man",
          "2008",
          "Action",
          "ironman.jpg",
          "Rich guy builds himself an expensive toy."
        )
      );
      props.dispatch(
        addMovie(
          "Dead Poets Society",
          "1989",
          "Comedy",
          "deadpoetssociety.jpg",
          "Something about poetry."
        )
      );
      props.dispatch(
        addMovie(
          "Eboka's Movie",
          "Hopefully 2020",
          "Unknown",
          "shawshankredemption.jpg",
          "We don't know yet"
        )
      );
          


      // Get Id of default movies  
      for (const movie of props.movies) {
        defaultMovieIds.push(movie.id);
      }


      //////////////////////////////////
      // Reviews
      //////////////////////////////////
      props.dispatch(
        addReview(
            defaultMovieIds[0], 
            "Adolf", 
            "8", 
            "It was very good, I swear."
            )
      );

      props.dispatch(
        addReview(
          defaultMovieIds[0],
          "Eboka",
          "7",
          "I agree with Adolf, it was pretty awesome"
        )
      );

      props.dispatch(
        addReview(
            defaultMovieIds[1], 
            "Eboka", 
            "7", 
            "Overrated, depressing"
            )
      );

      props.dispatch(
        addReview(
            defaultMovieIds[3], 
            "Hitesh", 
            "10", 
            "My favorite Movie"
            )
      );

      props.dispatch(
        addReview(
          defaultMovieIds[0],
          "Ummer",
          "10",
          "Guys, this is absolutely a 10, my favorite movie."
        )
      );

      props.dispatch(
          addReview(
              defaultMovieIds[2], 
              "Ummer", 
              "8", 
              "Nice."
              )
          );

      props.dispatch(
        addReview(
          defaultMovieIds[4],
          "Ummer",
          "1",
          "How can this movie be good? No one has seen it yet"
        )
      );

      props.dispatch(
        addReview(
          defaultMovieIds[4],
          "Ummer",
          "4",
          "Maybe I was wrong, maybe it will be great."
        )
      );
    
      //////////////////////////////////
      // Profiles
      //////////////////////////////////
      props.dispatch(
          createProfile(
              "Adolf", 
              "adolf@adolf.com", 
              "123"
              )
          );

      props.dispatch(
          createProfile(
              "Eboka", 
              "eboka@eboka.com", 
              "12334"
              )
          );
    
      props.dispatch(
        updateProfile(
          "Adolf",
          "GoodBoyAdolf",
          "nomail@mail.com",
          "sadasd",
          "aa",
          "asda"
        )
      );
    }

    return(
      <button onClick={fillStore}>Fill Store</button>
    );
  };

  export default connect(state => ({store: state, movies: state.movies}))(DefaultStore);