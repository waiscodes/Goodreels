import React from 'react';
import MovieCard from './MovieCard';
import { connect } from 'react-redux';


const ListMovies = ( props ) => {


    return (

        <>
        <ul>
           {props.listMovies.map(  ( movie ) => <li key={movie.id}><MovieCard movieId={movie.id} /></li> ) }
        </ul>
        </>

    );
    
}
export default connect( state => ( { listMovies: state.movies } ) ) ( ListMovies );