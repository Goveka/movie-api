import React from 'react';
import Movies from './movies';

function movie_container({movieList, setMovieList}) {
    return( movieList.map(movies =>{
        return <Movies movies={movies} movieList={movieList} setMovieList={setMovieList} />
    }))
}

export default movie_container