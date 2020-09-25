import React from 'react';
import ListReviews from './ListReviews';
import ListMovies from './ListMovies';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/Browse.css';
import { useState } from 'react';


const Browse = (props) => {

    let [searchTerm, updateSearch] = useState('');

    if (props.activeUser.username !== undefined){

        

        return (
            // Search, filter
            <>
                <form onSubmit={event => { event.preventDefault(); }}>
                    <label htmlFor="movie">Enter Movie name</label>
                    <input
                        id="movie"
                        type="search"
                        onChange={e => updateSearch(e.target.value)}
                        value={searchTerm}
                    />
                </form>
                
                <ListMovies searchTerm={searchTerm}/>
                


            </>
        );
    }
    else return (
            <Redirect to="/" />
    );

}
export default connect(state =>({activeUser: state.activeUser}))(Browse);