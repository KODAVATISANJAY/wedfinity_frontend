import React, { useState } from 'react';
import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Packages from './components/Packages.jsx';
import PlanningChecklist from './components/PlanningChecklist.jsx';
import Gallery from './components/Gallery.jsx';
import Testimonials from './components/Testimonials.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

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
