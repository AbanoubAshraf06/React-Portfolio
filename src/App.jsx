import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About'
import Education from './components/Education/Education.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'
import {Routes, Route} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>

        <Route path='/home' element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/education' element={<Education/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
