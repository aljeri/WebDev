import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home.jsx'
import MovieList from './pages/MovieList.jsx'
import Navbar from './pages/NavbarX'
import Movie from './pages/Movie'
import Notfound from './pages/Notfound'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Row, Container} from 'react-bootstrap'

function App() {
  return(
    <Container>
      <Row>
         <Navbar/>
      </Row>
      <Row className='mt-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<MovieList /> } />
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