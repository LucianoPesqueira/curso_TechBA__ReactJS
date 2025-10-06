import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import EcommerceTotal from './components/CarritoCompras'

function App() {

  return (
    <>
    <Header />
    <Nav />
    <EcommerceTotal />    
    </>
  )
}

export default App

{/*mockapi.io
- new project
	name: tienda
	API Prefix: /api

-- new resource
	Resource name: productos
	Schema:
	id
	nombre	Faker.js		name.fullname
	descripcion	Faker.js		commerce.productDescription
	avatar		Faker.js		image.avatar
	
- sobre productos puedo elegir la cantidad de productos que se generan. */}