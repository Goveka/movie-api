import React from 'react';
import Movies from './Secondmovies';


function secondContainer( {secondList, setSecondList}){

    return(
        secondList.map(movies =>{
            return <Movies  movies={movies} secondList={secondList} setSecondList={setSecondList} />
        })
    )
}


export default secondContainer