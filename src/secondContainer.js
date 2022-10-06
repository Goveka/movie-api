import React from 'react';
import Movies from './Secondmovies';


function secondContainer( {secondList, setSecondList, errorMsg, setErrMsg}){

    return(
        secondList.map(movies =>{
            return <Movies  movies={movies} secondList={secondList} setSecondList={setSecondList} errorMsg={errorMsg} 
                    setErrMsg={setErrMsg}
            />
        })
    )
}


export default secondContainer