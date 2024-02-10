
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutUs from './pages/AboutUs.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import SiginUp from './pages/SiginUp'
import Siginin from './pages/Siginin.jsx'
import Contact from './pages/Contact.jsx'
import Denied from './pages/Denied.jsx'



function App() {


  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/siginup' element={<SiginUp/>}/>
      <Route path='/siginin' element={<Siginin/>}/>
      <Route path='/contacts' element={<Contact/>}/>
      <Route path='/denied' element={<Denied/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App
