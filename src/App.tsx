import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;