import React from 'react'
import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import Navbar from './components/Navbar'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import CreateProject from './pages/CreateProject'


const App = () => {
  return (
    <main className = "bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/contact" element = {<Contact />} />
          <Route path = "/Login" element = {<Login />} />
          <Route path = "/Register" element = {<Register />} />
          <Route path = "/Dashboard" element = {<Dashboard />} />
          <Route path = "/CreateProject" element = {<CreateProject />} />
        </Routes>
      </Router>
    </main>
  )
}
export default App

