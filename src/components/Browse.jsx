import React from 'react';
import ListReviews from './ListReviews';
import ListMovies from './ListMovies';
import '../css/Browse.css';
import { setState } from 'react';


const Browse = () => {


    return (
        // Search, filter
        <>
            <form onSubmit={event => { event.preventDefault(); }}>
                <label htmlFor="movie">Enter Movie name</label>
                <input
                    id="movie"
                    type="search"
                />
            </form>
            
            <ListMovies />
            


        </>
    );

}
export default Browse;