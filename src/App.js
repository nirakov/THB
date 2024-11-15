import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="bg-light-grey min-h-screen font-sans">
      <Navbar />
      <Header />
      <Features />
      <About />
      <Team />
      <Footer />
    </div>
  );
}

export default App;