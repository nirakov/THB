import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';
import SaibaMais from './components/SaibaMais';
import FeatureDetail from './components/FeatureDetail'; // ⬅️ novo

function App() {
  return (
    <Router basename="/THB">
      <Routes>
        {/* Página inicial */}
        <Route 
          path="/" 
          element={
            <div className="bg-light-grey min-h-screen font-sans">
              <Navbar />
              <Header />
              <Features />
              <About />
              <Team />
              <Footer />
            </div>
          } 
        />

        {/* Página "Saiba Mais" */}
        <Route 
          path="/saiba-mais" 
          element={
            <div className="bg-light-grey min-h-screen font-sans">
              <Navbar />
              <SaibaMais />
              <Footer />
            </div>
          } 
        />

        {/* Página de detalhe de recurso */}
        <Route 
          path="/feature/:id" 
          element={
            <div className="bg-light-grey min-h-screen font-sans">
              <Navbar />
              <FeatureDetail />
              <Footer />
            </div>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
