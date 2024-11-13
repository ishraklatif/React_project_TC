import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavbarComponent';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './components/Services';
import Contact from './components/Contact';
import ITES from './pages/ites';
import BPO from './pages/bpo';
import OUTS from './pages/outs';
import PRM from './pages/prm';
import TECH from './pages/tech';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/ites" element={<ITES />} />  {/* ITES Route */}
        <Route path="/services/bpo" element={<BPO />} />  {/* ITES Route */}
        <Route path="/services/outs" element={<OUTS />} />  {/* ITES Route */}
        <Route path="/services/prm" element={<PRM />} />  {/* ITES Route */}
        <Route path="/services/tech" element={<TECH />} />  {/* ITES Route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
