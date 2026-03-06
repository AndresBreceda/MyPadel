import { useState } from 'react'
import './App.css'
import { Login } from './components/login'
import { Admin } from './components/Admin'
import { Usuario } from './components/home'
import { Routes, Route } from "react-router";
import {NotFound} from './components/NotFound';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/usuario" element={<Usuario />} />
      <Route path="/*" element={<NotFound />} />

    </Routes>
  )
}

export default App
