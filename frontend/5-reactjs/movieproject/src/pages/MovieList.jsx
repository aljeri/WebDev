import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import SearchBox from './SearchBox'
import Favourites from './Favourites'
import { useState, useEffect } from 'react';

export default function MovieList() {
  const [movies, setMovies]= useState([]);
  const [searchValue, setSearch]= useState('Ace');
  const [favourites, setFavourites] = useState([]);

  const fetchMovies = async(searchValue) =>{
    const url=`http://www.omdbapi.com/?s=${searchValue}&apikey=20c4daca`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    if(data.Search){
      setMovies(data.Search)
    
    }
  }
  const addFavouriteMovie = (currentMovie) => {
		const newFavouriteList = [...favourites, currentMovie];
		setFavourites((newFavouriteList));
	};

  useEffect(()=>{
     fetchMovies(searchValue);
  },[searchValue])
  return (
    <>
    <div className='row'>
      <h5>Movies List</h5>
      <div className='col-8'>
    <Link to='/movies/diehard'>Die Hard</Link>
    <Link style={{padding: '10px'}} to='/movies/topgun' state={{category: 'Comedy'}}>Top Gun</Link>
    </div>
    <div className='col-4 justify-content-end'>
      <SearchBox searchValue={searchValue} setSearchValue={setSearch} />
    </div>

    </div>
    {/*render all movies */}
    <div className='container-fluid'>
      <div className='row justify-content-center'>
          { movies.map((movie, _) => (
            <div key={movie.imdbID} className='col-md-2 image-container d-flex justify-content-start m-3'>
              <img style={{width:'100%'}}src={movie.Poster} alt='movie'/>
              <div onClick={() => addFavouriteMovie(movie)} className='overlay d-flex align-items-center justify-content-center'>
              <Favourites />
					</div>
            </div>
          ))}
      </div>
      <div className='row justify-content-center'>
        <h3>Favorites:</h3>
        {
          favourites.map((fav,_) => (
            <div key={fav.imdbID} className='col-md-2 image-container d-flex justify-content-start m-2'>
            <img style={{width:'100%'}}src={fav.Poster} alt='movie'></img>
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}


//Link to 
//Link replace
//Link state={''}
//onClick={()=>navigate(`/movies/${movie.title}`,{ state: stateData })}/>
