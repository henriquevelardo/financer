import Footer from 'Componentes/Footer'
import Header from 'Componentes/Header'
import Inicio from './Pages/Inicio/index'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MesDetalhado from 'Pages/MesDetalhado'

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Header />
      
        <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='/detalhe' element={<MesDetalhado />}/>
        </Routes>

        <Footer />
        
    </BrowserRouter>
  )
}
