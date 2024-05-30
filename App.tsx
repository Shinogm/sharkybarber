import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LoginForm } from './app/Login/Componentes/Login'
import { RegistroForm } from './app/Registro/Componentes/Registro'
// Importa otros componentes según sea necesario

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='./Login/Componentes/Login' element={<LoginForm />} />
        <Route path='/registro' element={<RegistroForm />} />
        {/* Agrega otras rutas según sea necesario */}
      </Routes>
    </Router>
  )
}

export default App
