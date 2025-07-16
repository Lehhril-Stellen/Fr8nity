import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import './assets/css/style.css';
// import "./assets/js/swipper"

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Spotlight from './pages/Spotlight';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/spotlight" element={<Spotlight />} />
       <Route path="/contact" element={<Contact />} />  
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
