import React from 'react'
import {useParams, useLocation} from 'react-router-dom'

export default function Movie() {
  const {id} = useParams();
  const data= useLocation();
  return (
    <div>
      Movie {id}
      <br/>
      {data.state.category}
    </div>
  )
}


//useParams - for path elements
//useLocation -for state
