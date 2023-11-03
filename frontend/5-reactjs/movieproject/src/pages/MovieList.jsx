import React from 'react'
import {Link} from 'react-router-dom'
export default function MovieList() {
  return (
    <>
    <div>MovieList</div>
    <Link to='/movies/diehard'>Die Hard</Link>
    <br/>
    <Link to='/movies/hello' state={{category: 'comedy'}}>Hello</Link>
    </>
  )
}


//Link to 
//Link replace
//Link state={''}