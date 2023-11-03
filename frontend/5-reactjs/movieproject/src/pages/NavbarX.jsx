import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavbarX() {
  const item={
    all: 'inherit'
  }
  return (
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">Movies Database</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link as={Link} to="/" >Home</Nav.Link>  
        <Nav.Link as={Link} to="/movies" >Movies</Nav.Link>  
        </Nav>
        <Nav className='justify-content-end'>
        <Navbar.Text>
            Signed in as: <a href="#">Tester</a>
          </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
 
  )
}

//NavLink (active state) vs Link?