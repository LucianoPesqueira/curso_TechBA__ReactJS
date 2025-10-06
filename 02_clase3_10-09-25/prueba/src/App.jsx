import { useState } from 'react'
import ListaUsuarios from "./ListaUsuarios"
import ListaEquipo from './ListaEquipo'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {

  const equipo = [
        {id: 1 ,nombre: 'Silvia', tecnologia: 'Product Owner'},
        {id: 2 ,nombre: 'Luis', tecnologia: 'Diseñador UX UI'},
        {id: 3 ,nombre: 'Matias', tecnologia: 'Desarrollador'},
        {id: 4 ,nombre: 'Sabrina', tecnologia: 'Desarrolladora'}
      ];

  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Gallery />
      <ListaUsuarios />
      <ListaEquipo equipo={equipo}/>
      <Footer />
    </>
  )
}

export default App
