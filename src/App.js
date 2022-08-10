import React, {useState,useRef} from 'react';
import './App.css';
import MovieContainer from  './movie-container';

function App() {
  const[movieList, setMovieList]= useState([])
  const searchInput=useRef();
  

const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2d6e8fcaf6msha33c7309355fa46p1987afjsnaa1e2d3b8078',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
      }
    };

    fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20`, options)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setMovieList(movies =>{
          return data.d;
        })
      })
      .catch(err => console.error(err));

  function search(){
    
    const search=searchInput.current.value;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2d6e8fcaf6msha33c7309355fa46p1987afjsnaa1e2d3b8078',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
      }
    };

    fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${search}%20`, options)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setMovieList(movies =>{
          return data.d;
        })
      })
      .catch(err => console.error(err));
    }

  return (
    <>
    <header>
      <h1>SnMovies</h1>
      <p>explore all your favourite movies and tvSeries</p>
    </header>
    <span>
      <input type={search} ref={searchInput} placeholder='search...'  />
      <button onClick={search}>search</button>
    </span>
    <div id='movies'>
      <MovieContainer setMovieList={setMovieList} movieList={movieList} />
    </div>
    </>

  );
}

export default App;
