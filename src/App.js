import React from 'react'
import Personajes from './Componentes/Personajes/Personajes'
import './app.css'
import Footer from './Componentes/Footer/Footer.jsx'

const App = () => {
  return (
    <div className="fondo">
      <h1 className="title"> RUBIOXXX </h1>
      <Personajes />
      <Footer />
    </div>
  )
}

export default App
