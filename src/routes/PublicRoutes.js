import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login.component'
import Register from '../pages/Register.component'

const PublicRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
  )
}

export default PublicRoutes