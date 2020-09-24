import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Redux Import
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import rReviews from './reducers/rReviews';
import rProfile from './reducers/rProfile';
import rMovies from './reducers/rMovies';
import {addMovie} from './actions/aMovies';
import {addReview} from './actions/aReviews';
import {createProfile, updateProfile} from './actions/aProfile';
import rActiveUser from './reducers/rActiveUser';

// Style
import './css/index.css';

// Component Import
import SignIn from './components/SignIn';
import Header from './components/Header';
import Footer from './components/Footer';
import AddReview from './components/AddReview';
import ListReviews from './components/ListReviews';
import UserProfile from './components/UserProfile';
import Recommended from './components/Recommended';
import Browse from './components/Browse';
import Movie from './components/Movie';

// Default Store population until we incorporate Back End.
const DefaultStore = () => {
  store.dispatch(addMovie("Catch Me If You Can", "2002", "Crime", "catchmeifyoucan.jpg", "Guy prints fake money, on the run the whole time."));
  store.dispatch(addMovie("Shawshank Redemption", "1994", "Crime", "shawshankredemption.jpg", "Are you gonna stay in prison if you're innocent? Or are you?"));
  store.dispatch(addMovie("Iron Man", "2008", "Action", "ironman.jpg", "Rich guy builds himself an expensive toy."));
  store.dispatch(addMovie("Dead Poets Society", "1989", "Comedy", "deadpoetssociety.jpg", "Something about poetry."));
  store.dispatch(addMovie("Eboka's Movie", "Hopefully 2020", "Unknown", "shawshankredemption.jpg", "We don't know yet"));
  
  let defaultMovieIds = [];
  for (const movie of store.getState().movies) {

      defaultMovieIds.push(movie.id);
  
  }
  
  store.dispatch(addReview( defaultMovieIds[0] , "Adolf", "8", "It was very good, I swear."));
  store.dispatch(addReview( defaultMovieIds[0] , "Eboka", "7", "I agree with Adolf, it was pretty awesome"));
  store.dispatch(addReview( defaultMovieIds[1] , "Eboka", "7", "Overrated, depressing"));
  store.dispatch(addReview( defaultMovieIds[3] , "Hitesh", "10", "My favorite Movie"));
  store.dispatch(addReview( defaultMovieIds[0] , "Ummer", "10", "Guys, this is absolutely a 10, my favorite movie."));
  store.dispatch(addReview( defaultMovieIds[2] , "Ummer", "8", "Nice."));
  store.dispatch(addReview( defaultMovieIds[4] , "Ummer", "1", "How can this movie be good? No one has seen it yet"));
  store.dispatch(addReview( defaultMovieIds[4] , "Ummer", "4", "Maybe I was wrong, maybe it will be great."));
  
  store.dispatch(createProfile("Adolf", "adolf@adolf.com", "123"));
  store.dispatch(createProfile("Eboka", "eboka@eboka.com", "12334"));

  store.dispatch(updateProfile("Adolf", "GoodBoyAdolf", "nomail@mail.com", "sadasd", "aa", "asda"));

}

// Redux Store
const rootReducer = combineReducers({
    users: rProfile,
    reviews: rReviews,
    movies: rMovies,
    activeUser: rActiveUser
});

const store = createStore(
              rootReducer,
              window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);





/////////////////////
// Page code
/////////////////////
DefaultStore();


ReactDOM.render(
  <React.StrictMode>
    <> 
        <Provider store={store}>

          

           
              <Router>
                  <Header />
                  <main>
                    <Route path="/" exact> <SignIn /> </Route>
                    <Route path="/Browse"> <Browse /> </Route>
                    <Route path="/Recommended"> <Recommended /> </Route>
                    <Route path="/UserProfile"> <UserProfile /> </Route>
                    <Route path="/Movie"> <Movie movieId="placeholder" /> </Route>
                  </main>

              </Router>
  

          <Footer />

      </Provider> 
      
    </>
  </React.StrictMode>,
  document.getElementById('root')
);




