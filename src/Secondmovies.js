import React from 'react';



function Secondmovies({movies, setSecondList, secondList}){

return(
    <>
    <div id='movie'>
    <h2>movie name: {movies.title.title}</h2>
    <img src={movies.title.image.url} alt="movie" />
    <p>type:{movies.title.titleType} </p>
    <p>number of episodes: {movies.title.numberOfEpisodes}</p>
    <p> start year:{movies.title.seriesStartYear} - end year:{movies.title.seriesEndYear} </p>
    <p>ratings: {movies.ratings.rating} </p>
    </div>
    </>
)

}

export default Secondmovies