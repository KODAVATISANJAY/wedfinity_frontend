import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import PlanningChecklist from './components/PlanningChecklist';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' && (
        <>
          <Hero setCurrentPage={setCurrentPage} />
          <Services />
          <Packages />
          <Gallery />
          <Testimonials />
        </>
      )}
      
      {currentPage === 'planning' && <PlanningChecklist />}
      {currentPage === 'contact' && <ContactForm setCurrentPage={setCurrentPage} />}
      
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
