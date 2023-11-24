import React, { memo } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './components/Home/Home';
import About from './components/About/About';
import Events from './components/Events/Events';
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  )
}

export default memo(App);