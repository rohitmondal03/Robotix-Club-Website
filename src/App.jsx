import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home/Home';
import About from './components/About/About';
import Events from './components/Events/Events';
import Navbar from './components/Navbar/Navbar';
import './App.css'


function App() {
  return (
    <>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </main>
    </>
  )
}

export default memo(App);