import React, { useState } from 'react'
import "../styles/Formulario.css"

function Formulario() {
    const [nombre, setNombre] = useState(''); //variable de estado "nombre"

    const manejarCambio = (e) => {
        setNombre(e.target.value); //actualiza el estado con el valor del input
    }
  return (
    <div id='card-formulario'>
      <h2>Formulario Estado</h2>
        <input type="text" 
        value={nombre} 
        onChange={manejarCambio}
        placeholder='Escribe tu nombre' />
        <p>¡Hola, {nombre || 'Anonimo'}</p>
    </div>
  );
} export {Formulario}


function Formulario2() {
    const [nombre, setNombre] = useState(''); //variable de estado "nombre"
    const [correo, setCorreo] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log(`Nombre: ${nombre} \Correo: ${correo}`)
    }
  return (
    <div id='card-formulario'>
        <h2>Formulario de envio</h2>
        <form onSubmit={manejarEnvio}>
            <div>
                <label>Nombre:</label>
                <input type="text" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)}
                placeholder='Escribe tu nombre' />
            </div>

            <div>
                <label>Correo:</label>
                <input type="text" 
                value={correo} 
                onChange={(e) => setCorreo(e.target.value)}
                placeholder='Escribe tu correo' />
            </div>
            <hr />
            <button type='submit'>Enviar</button>
        </form>

        <div>
            <p>Nombre: {nombre || 'Anonimo'}</p>
            <p>Tu correo: {correo || 'Anonimo'}</p>
        </div>
    </div>
  );
}

export {Formulario2}