import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home.jsx'
import MovieList from './pages/MovieList.jsx'
import Navbar from './pages/NavbarX'
import Movie from './pages/Movie'
import Notfound from './pages/Notfound'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import {Row, Container} from 'react-bootstrap'

//Classwork: add delete fav
//Classwork: connect each movie to movie.jsx? 
// bonus: connect fav to localstorage
//next class: add sign-in and registeration pages

function App() {
  return(
    <Container>
      <Row className='col-md-12 d-none d-md-block bg-light sidebar'>
         <Navbar/>
      </Row>
      <Row className='col-md-12 ml-sm-auto col-lg-12 px-2 py-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<MovieList  /> } />
            <Route path='/movies/:id' element={<Movie />} />
            <Route path="*" element={<Notfound/>} />
          </Routes>
        </Row>
    </Container>
  )
}

export default App

//Navbar 
//Routes and Route path= element=
//page not found