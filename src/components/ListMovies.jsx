import React from 'react';
import MovieCard from './MovieCard';
import { connect } from 'react-redux';


const ListMovies = ( props ) => {


    if (props.searchTerm !== "" || props.searchTerm !== undefined){

        return (

            <>
            <ul>
                {props.listMovies.map(  ( movie ) => {
                    
                    if (movie.title.toLowerCase().includes(props.searchTerm.toLowerCase())){
                        return <li key={movie.id}><MovieCard movieId={movie.id} /></li> 
                    }
                    
                } ) }
            </ul>
            </>

        );     

    }
    else 
        return (

            <>
            <ul>
            {props.listMovies.map(  ( movie ) => <li key={movie.id}><MovieCard movieId={movie.id} /></li> ) }
            </ul>
            </>

        );

    
}
export default connect( state => ( { listMovies: state.movies } ) ) ( ListMovies );