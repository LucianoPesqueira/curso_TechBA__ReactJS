import { useState } from "react";

function Layout({children}) {
    return (
        <div>
            <header>
                <h1>Tienda Online</h1>
            </header>
            <main>{children}</main>
            <footer>
                © 2025 Tienda Online - Todos los derechos reservados
            </footer>
        </div>
    );
}

function ProductList({agregarAlCarrito}) {
    const productos = [
        {id:1, nombre: 'Camiseta', precio: 15.000},
        {id:2, nombre: 'Pantalon', precio: 30.000},
        {id:3, nombre: 'Zapatos', precio: 50.000}
    ];

    return (
        <div>
            <h2>Lista de Productos</h2>
            {productos.map((producto) => (
                <div key={producto.id}>
                    <span>{producto.nombre} - ${producto.precio.toFixed(3)}</span>
                    <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
                </div>
            ))}
        </div>
    );
}

function CarritoCompras({carrito, vaciarCarrito}) {
    const total = carrito.reduce((sum, item) => sum + item.precio, 0);

  return (
    <div>
        <h2>=====================</h2>
        {carrito.length === 0 ? (
            <p>Carrito vacio</p>): (
                <>
                    {carrito.map((item) => (
                        <div>
                            {item.nombre} - ${item.precio.toFixed(3)}
                        </div>
                    ))}
                    <div>
                        Total: ${total.toFixed(3)}
                    </div>
                    <button onClick={vaciarCarrito}>
                        Vaciar Carrito
                    </button>
                </>
    )}
    </div>
  );
}

function EcommerceTotal() {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    return (
        <Layout>
            <ProductList agregarAlCarrito={agregarAlCarrito}/>
            <CarritoCompras carrito={carrito} vaciarCarrito={vaciarCarrito}/>
        </Layout>
    );
} export default EcommerceTotal;