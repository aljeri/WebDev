import React from 'react'
import { useContext } from 'react';
import CartContext from '../context/CartProvider';
import '../App.css'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Cart() {
  const { cartItem } = useContext(CartContext);
  return (
    <>
    <div>Cart</div>
    <div className='container-fluid'>
    <div className='row justify-content-center'>
   { cartItem.map((movie,_)=>(
      <div key={movie.imdbID} className='col-md-2 image-container d-flex justify-content-start m-3'>
      <img onClick={()=>navigate(`/movies/${movie.Title}`,{ state: movie })}
      style={{width:'100%'}}src={movie.Poster} alt='movie'/>
     </div>
    ))}
    </div>
    </div>
    </>
  )
}
