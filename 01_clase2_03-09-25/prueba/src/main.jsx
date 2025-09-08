import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, {Subtitulo, Boton} from './App.jsx' //importo otra funcion de manera nombrada


createRoot(document.getElementById('root')).render(
    <>
    <App />
    <Subtitulo />
    <Boton />
    </>
)
