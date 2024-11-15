import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import LogosComponents from './components/LogosComponents/LogosComponents';
import OurServices from './components/OurServices/OurServices';
import BlogAndNews from './components/BlogAndNews/BlogAndNews'
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';



function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>

      
      
      
      
      
      
    </>
  )
}

export default App
