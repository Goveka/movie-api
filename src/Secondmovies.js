import React from 'react';



function Secondmovies({movies, setSecondList, secondList, errorMsg, setErrMsg}){

return(
    <>
    <div id='movie'>
    <h2>movie name: {movies.title}</h2>
    <img src={movies.image.url} alt="movie" />
    <p>type:{movies.titleType} </p>
    <p>Realease year: {movies.year}</p>
    </div>
    <h1>{errorMsg}</h1>
    </>
)

}

export default Secondmovies