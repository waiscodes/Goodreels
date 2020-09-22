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

// Default Store population until we incorporate Back End.
const DefaultStore = () => {
  store.dispatch(addMovie("Catch Me If You Can", "2002", "Crime", "catchmeifyoucan.jpg", "Guy prints fake money, on the run the whole time."));
  store.dispatch(addMovie("Shawshank Redemption", "1994", "Crime", "shawshankredemption.jpg", "Are you gonna stay in prison if you're innocent? Or are you?"));
  store.dispatch(addMovie("Iron Man", "2008", "Action", "ironman.jpg", "Rich guy builds himself an expensive toy."));
  store.dispatch(addMovie("Dead Poets Society", "1989", "Comedy", "deadpoetssociety.jpg", "Something about poetry."));
  store.dispatch(addMovie("Eboka's Movie", "Hopefully 2020", "Unknown", "shawshankredemption.jpg", "We don't know yet"));
  
  let defaultMovieIds = [];
  store.getState().movies.map( movie => {

      defaultMovieIds.push(movie.id);
  
  });
  store.dispatch(addReview( defaultMovieIds[0] , "Adolf", "8", "It was very good, I swear."));
  store.dispatch(addReview( defaultMovieIds[0] , "Eboka", "7", "I agree with Adolf, it was pretty awesome"));
  store.dispatch(addReview( defaultMovieIds[1] , "Eboka", "7", "Overrated, depressing"));
  store.dispatch(addReview( defaultMovieIds[3] , "Hitesh", "10", "My favorite Movie"));
  store.dispatch(addReview( defaultMovieIds[0] , "Ummer", "10", "Guys, this is absolutely a 10, my favorite movie."));
  store.dispatch(addReview( defaultMovieIds[2] , "Ummer", "8", "Nice."));
  store.dispatch(addReview( defaultMovieIds[4] , "Ummer", "1", "Dead poets? No thanks."));
  
  store.dispatch(createProfile("Adolf", "adolf@adolf.com", "123"));
  store.dispatch(createProfile("Eboka", "eboka@eboka.com", "12334"));

}

// Redux Store
const rootReducer = combineReducers({
    user: rProfile,
    reviews: rReviews,
    movies: rMovies
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

          <Header />

          <main> 
              <Router>

                  <Route path="/" exact> <SignIn /> </Route>
                  <Route path="/Browse"> <Browse /> </Route>
                  <Route path="/Recommended"> <Recommended /> </Route>
                  <Route path="/UserProfile"> <UserProfile /> </Route>

              </Router>
          </main>

          <Footer />

        </Provider>        
    </>
  </React.StrictMode>,
  document.getElementById('root')
);




