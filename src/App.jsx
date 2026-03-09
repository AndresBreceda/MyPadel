import { useState } from 'react'
import './App.css'
import { Login } from './components/login'
import { Admin } from './components/Admin/users'
import { Usuario } from './components/home'
import { Canchas } from './components/Admin/canchas'
import { Routes, Route } from "react-router";
import {NotFound} from './components/NotFound';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin/users" element={<Admin />} />
      <Route path="/admin/canchas" element={<Canchas />} />
      <Route path="/usuario" element={<Usuario />} />
      <Route path="/*" element={<NotFound />} />

    </Routes>
  )
}

export default App
