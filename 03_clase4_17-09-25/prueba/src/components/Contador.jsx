import React from 'react'
import { useState } from 'react'
import "../styles/Contador.css"

function Contador() {
    const[contador, setContador] = useState(0);
  return (
    <div id='card-container-count'>
        <h1>Contador Simple</h1>
        <p>{contador}</p>
        <button id='contador' onClick={() => setContador(contador + 1)}>Contador</button>
    </div>
  );
} export {Contador}


function Contador2() {
    const[contador, setContador] = useState(0);

  return (
    <div id='card-container-count'>
        <div id='card-button'>
            <h1>Contador con (useState) en onClick</h1>
            <button id='suma' onClick={() => setContador(contador + 1)}>Suma</button>
            <button id='resta' onClick={() => setContador(contador - 1)}>Resta</button>
        </div>
        <div>Total: {contador}</div>
        <hr />
        <button id='borrar' onClick={() => setContador(0)}>Borrar</button>
    </div>
  )
} export {Contador2}