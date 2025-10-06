import React from 'react'
import { useState } from 'react';
import "../styles/Carrito.css"

function Carrito() {

    const listaProductos = [
        {id:1, nombre: 'Camiseta', precio: 15.000},
        {id:2, nombre: 'Pantalon', precio: 30.000},
        {id:3, nombre: 'Zapatos', precio: 50.000}
    ];
    {/*variable de estado carrito*/}
    const [carrito, setCarrito] = useState([]);

    {/*funcion agregar producto a carrito*/}
    {/*...carrito: SPREAD Operator, facilita la recogida ed valores de una estructura de datos */}
    const agregarCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };
    {/*funcion vaciar el carrito */}
    const vaciarCarrito = () => {
        setCarrito([]);
    };

  return (
    <div id='card-carrito'>
        <h1>Carrito de Compras</h1>
        <h3>Productos</h3>
        <ul id='card-producto'>
            {/*producto: variable de iteracion */}
            {listaProductos.map((producto) => (
                <li key={producto.id}>
                    {producto.nombre}: ${producto.precio.toFixed(3)}
                    <button onClick={() => agregarCarrito(producto)}>+</button>
                </li>
            ))}
        </ul>
        <h2>===================</h2>
        <h3>Carrito</h3>
        {carrito.map((producto, index) => (
            <p key={index}>
                {producto.nombre}: ${producto.precio.toFixed(3)}
            </p>
        ))}
        <button id='card-btn-eliminar' onClick={vaciarCarrito}>Eliminar</button>
    </div>
  );
} export default Carrito
