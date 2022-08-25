import React, {useState,useRef} from 'react';
import './App.css';
import SecondContainer from './secondContainer';

function App() {

  const searchInput=useRef();
  const[secondList, setSecondList]=useState([]);
  

  function search(){
    
    const search=searchInput.current.value;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2d6e8fcaf6msha33c7309355fa46p1987afjsnaa1e2d3b8078',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
      }
    };
    
    fetch(`https://online-movie-database.p.rapidapi.com/title/v2/find?title=${search}%20of&limit=20&sortArg=moviemeter%2Casc`, options)
      .then(response => response.json())
      .then(response => { setSecondList(movies =>{
        return response.results
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
      <input type={search} ref={searchInput} placeholder='search...'   />
      <button onClick={search}>search</button>
    </span>
    <div id='movies'>
      <SecondContainer secondList={secondList} setSecondList={setSecondList} />
    </div>
    </>

  );
}

export default App;
