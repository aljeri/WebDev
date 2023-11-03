import React from 'react'
import {useParams, useLocation} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export default function Movie() {
  const {id} = useParams();
  const data= useLocation();
  return (
    <Card style={{ width: '25rem', margin: '10px' }}>
    <div className="row">
      <div className="col-md-6">
        <Card.Img variant="" src={`../src/assets/${id}.jpg`} />
      </div>
      <div className="col-md-6">
        <Card.Body>
          <Card.Title>Movie {id}</Card.Title>
          <Card.Text>{data.state ? data.state.category : 'No data'}</Card.Text>
          <Button variant="primary">Example Button</Button>
        </Card.Body>
      </div>
    </div>
  </Card>
  
   
  )
}


//useParams - for path elements
//useLocation -for state
