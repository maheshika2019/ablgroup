import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import BusinessSectors from './components/BusinessSectors';
import Investors from './components/Investors';
import Innovation from './components/Innovation';
import News from './components/News';
import Careers from './components/Careers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Hero />
        <AboutSection />
        <BusinessSectors />
        <Innovation />
        <Investors />
        <News />
        <Careers />
      </main>
      <Footer />
    </div>
  );
}

export default App;