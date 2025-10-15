import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Navbar from './pages/Navbar'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import Pagar from './pages/Pagar'
import RutaProtegida from './pages/RutaProtegida'
import IniciarSesion from './pages/InicarSesion'

import Footer from './pages/Footer'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usuario, setUsuario] = useState({ nombre: "", email: "" });

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/productos' element={<Productos />} />{/*ruta estatica */}
        <Route path='/productos/:id' element={<DetalleProducto />}/>{/*ruta dinamica */}
        <Route path='/productos/:categoria/:id' element={<DetalleProducto />}/>
        <Route path="/iniciar-sesion" element={<IniciarSesion
              setIsAuthenticated={setIsAuthenticated}
              setUsuario={setUsuario}
            />
          }
        />
        <Route path="/pagar" element={ <RutaProtegida isAuthenticated={isAuthenticated}>
              <Pagar
                setIsAuthenticated={setIsAuthenticated}
                setUsuario={setUsuario}
                usuario={usuario}
              />
            </RutaProtegida>
          }
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
