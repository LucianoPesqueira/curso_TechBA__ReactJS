import './App.css'
import { MiBoton } from './MiBoton.jsx'

function App() {

  return (
    <>
    <h1 className="titulo">Comenzando con react</h1>
    <h2>Clase 2</h2>
    <MiBoton texto="Aceptar" color="green"/>
    <MiBoton texto="Cancelar" color="red"/>
    <MiBoton texto="Restablecer" color="gray"/>
    </>
  )
} export default App


function Subtitulo() {

  return (
    <h2>Talento Tech</h2>
  )
} export {Subtitulo}//exportacion nombrada


function Boton() {

  return(
    <button onClick={() => alert("Hola Mundo!")}>Click</button>
  )
} export {Boton}