
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutUs from './pages/AboutUs.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'



function App() {


  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App
