import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Events from './components/Events/Events';
import Navbar from './components/Navbar/Navbar';

import PreLoader from './components/PreLoader/preLoader';

import TeamPage from './components/Teams/Teams.jsx';
import Projects from './components/Projects/Projects';

import Footer from './components/Footer/Footer';

import './App.css'
import Robofest from './components/Robofest/Robofest';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>

      {loading ? <PreLoader /> : (
        <div id='all'>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/teams" element={<TeamPage />} />
              {/* <Route path="/numberanimation" element={<NumberAnimation targetNumber = {300}/>} /> */}

              <Route path="/robofest" element={<Robofest />} />

            </Routes>
          </main>
          <Footer />
        </div>
      )}


    </>
  );
}

export default App;
