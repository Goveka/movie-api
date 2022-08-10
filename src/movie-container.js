import React from 'react';
import Movies from './movies';

function movie_container({movieList, setMovieList, err , setErr}) {
    return( movieList.map(movies =>{
        return <Movies movies={movies} movieList={movieList} setMovieList={setMovieList} err={err} setErr={setErr} />
    }))
}

export default movie_container