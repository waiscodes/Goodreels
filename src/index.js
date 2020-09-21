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
  store.dispatch(addMovie("FakeMovie", "1988", "horror", "img/Fakemovie.jpg", "Nothing really happens in this movie"));
  store.dispatch(addMovie("Predator", "1988", "action", "img/predator.jpg", "Cool alien teaches people some lessons on how to be a warrior"));
  store.dispatch(addReview("store.movies[0].id", "fakeuser", "8", "It was very good, I swear."));
  store.dispatch(createProfile("Adolf", "adolf@adolf.com", "123"));
  store.dispatch(createProfile("Eboka", "eboka@eboka.com", "12334"));

  store.dispatch(updateProfile("Adolf", "GoodBoyAdolf","adolf@adolf.com", "123456", "I was born in Eastern Europe, which sparked my interest in post apocalyptic depressing movies.", "img/picture.jpg"));
  store.dispatch(updateProfile("Adolfaaa", "GoodBoyAdolf","adolf@adolf.com", "123456", "I was born in Eastern Europe, which sparked my interest in post apocalyptic depressing movies.", "img/picture.jpg"));
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




