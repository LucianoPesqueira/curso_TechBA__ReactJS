import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Navbar from './pages/Navbar'
import Productos from './pages/Productos'
import Footer from './pages/Footer'
import DetalleProducto from './pages/DetalleProducto'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/productos/:id' element={<DetalleProducto />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
