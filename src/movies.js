import React from 'react';


function movies({movies,movieList,setMovieList,err,setErr}) {
  
    return(
        <>
        <h1>{err}</h1>
        <div id='movie'>
            <h2>movie name: {movies.l}</h2>
            <img src={movies.i.imageUrl} alt="movie" />
            <p>Description: {movies.q}</p>
            <p>movie rank: {movies.rank}</p>
            <p>cast: {movies.s}</p>
            <p>release year: {movies.y} </p>
        </div>
        </>
    )
}


export default movies