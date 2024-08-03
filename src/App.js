import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Contact from './containers/contact';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Navbar from './components/navBar';
import particleOptions from './util.js/particles';

function App() {

  const [init, setInit] = useState(false);

  const location = useLocation();

  useEffect(() => {
    initParticlesEngine(async (main) => {
      await loadFull(main);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js */}
      {init && renderParticleJsInHomePage && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particleOptions}
        />
      )}
      {/* navBar */}
      <Navbar />
      {/* Main page Content */}
      <div className='App__main-page-content'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
