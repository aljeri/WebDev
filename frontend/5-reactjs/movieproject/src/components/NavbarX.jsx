import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartContext from '../context/CartProvider';
import AuthContext from '../context/AuthProvider';
import { useContext } from 'react';
export default function NavbarX() {
  const {cartItem} = useContext(CartContext)
  const {auth} = useContext(AuthContext)
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
        <Nav.Link as={Link} to="/admin" >Admin</Nav.Link>  

        </Nav>
        <Nav className='justify-content-end'>
          <Nav.Link as={Link} to="/cart">
           <i className="fa fa-shopping-cart"></i>
           <span className='badge badge-warning' id='lblCartCount'> {cartItem.length} </span>
          </Nav.Link>
        <Navbar.Text>
            <a href="#">{auth.user? auth.user: 'GUEST'}</a>
          </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
 
  )
}

//NavLink (active state) vs Link?