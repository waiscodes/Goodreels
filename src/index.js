import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Redux Import
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import rReviews from './reducers/rReviews';
import rProfile from './reducers/rProfile';
import rMovies from './reducers/rMovies';

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
