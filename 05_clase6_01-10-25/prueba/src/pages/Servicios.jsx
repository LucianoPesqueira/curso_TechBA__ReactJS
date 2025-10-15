import React from 'react'
import { Link } from 'react-router-dom'

function Servicios() {
  return (
    <div>
        <h1>Bienvenidos a Servicios</h1>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam obcaecati architecto eaque consectetur dolorem hic cumque iusto voluptates quidem. Explicabo!</p>
        <Link to="/"><button>Volver al inicio</button></Link>
    </div>
  )
}

export default Servicios