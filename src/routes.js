import Footer from 'Componentes/Footer'
import Header from 'Componentes/Header'
import Inicio from './Pages/Inicio/index'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detalhe from 'Pages/Detalhe'
import { GlobalStyles } from 'Componentes/GlobalStyles/GlobalStyles'

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <GlobalStyles />
        <Header />
      
        <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='/detalhe' element={<Detalhe />}/>
        </Routes>

        <Footer />
        
    </BrowserRouter>
  )
}
