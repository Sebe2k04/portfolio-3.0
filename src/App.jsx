import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
