import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import { Contador, Contador2 } from './components/Contador'
import {Formulario, Formulario2} from './components/Formulario'
import Carrito from './components/Carrito'
import EcommerceTotal from './components/CarritoCompras'

function App() {

  return (
    <>
    <Header />
    <Nav />
    <Main />
    <Gallery />
    <Contador />
    <Contador2 />
    <Formulario />
    <Formulario2 />
    <Carrito />
    <EcommerceTotal />
    <Footer />    
    </>
  )
}

export default App
