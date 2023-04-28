import Footer from 'Componentes/Footer'
import Header from 'Componentes/Header'
import Incio from 'Pages/Inicio'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Header />

        <Routes>
            <Route path='/' element={<Incio />}/>
        </Routes>

        <Footer />
        
    </BrowserRouter>
  )
}
