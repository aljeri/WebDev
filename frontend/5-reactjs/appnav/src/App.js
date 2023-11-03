import './App.css';
import Navbar from './Navbar'
import About from './pages/About';
import Home from './pages/Home'
import { Routes, Route, Link} from 'react-router-dom'
import AboutHim from './pages/AboutHim'
import Notfound from './pages/Notfound';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <nav>
         <Link className='btn btn-primary' to="/">Home</Link>
         
        <Link to="/about">About</Link>
        <Button>Test</Button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/about/:id' element={<AboutHim/>} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </div>
  );
}

export default App;
