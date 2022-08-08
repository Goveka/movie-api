import React from 'react';


function movies({movies,movieList,setMovieList}) {
  
    return(
        <>
        <div id='movie'>
            <h2>movie name: {movies.l}</h2>
            <img src={movies.i.imageUrl} />
            <p>Description: {movies.q}</p>
            <p>movie rank: {movies.rank}</p>
            <p>cast: {movies.s}</p>
            <p>release year: {movies.y} </p>
        </div>
        </>
    )
}


export default movies