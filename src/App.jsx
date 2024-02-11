import React, { useState, useEffect, memo } from "react"; // Import useState
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Products from "./components/Products/Products";
// import NumberAnimation from './components/Animation/Animation';
import Navbar from "./components/Navbar/Navbar";

import PreLoader from "./components/PreLoader/preLoader";
import Projects from "./components/Projects/Projects";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <div>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/projects" element={<Projects />} />
              {/* <Route path="/numberanimation" element={<NumberAnimation targetNumber = {300}/>} /> */}
            </Routes>
          </main>
        </div>
      )}
    </>
  );
}

export default memo(App);
