import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home.jsx'
import MovieList from './pages/MovieList.jsx'
import Navbar from './components/NavbarX'
import Movie from './pages/Movie'
import Notfound from './pages/Notfound'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { Container} from 'react-bootstrap'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import RequiredAuth from './components/RequiredAuth'
import AdminPage from './pages/AdminPage'

function App() {
  return(
    <Container>
      <div className='col-md-12 d-none d-md-block bg-light sidebar'>
         <Navbar />
      </div>
      <div className='col-md-12 ml-sm-auto col-lg-12 px-2 py-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<MovieList  /> } />
            <Route path='/movies/:id' element={<Movie />} />
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/cart' element={<Cart/>}/>
         
            <Route element={<RequiredAuth checkRoles={["admin"]}/>} >
              <Route path="/admin" element={<AdminPage/>} />
            </Route>
            
            <Route path="*" element={<Notfound/>} />
          </Routes>
        </div>
    </Container>
  )
}

export default App

//Navbar 
//Routes and Route path= element=
//page not found