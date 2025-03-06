import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer'
import About from './components/About'
import Membership from './components/Membership'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/membership' element={<Membership/>}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
