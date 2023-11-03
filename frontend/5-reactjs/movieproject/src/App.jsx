import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home.jsx'
import MovieList from './pages/MovieList.jsx'
import Navbar from './pages/Navbar'
import Movie from './pages/Movie'
import Notfound from './pages/Notfound'
function App() {
  return(
    <div>
      <Navbar/>
     
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/movies' element={<MovieList /> } />
         <Route path='/movies/:id' element={<Movie />} />
         <Route path="*" element={<Notfound/>} />
      </Routes>
    </div>
  )
}

export default App

//Navbar 
//Routes and Route path= element=
//page not found