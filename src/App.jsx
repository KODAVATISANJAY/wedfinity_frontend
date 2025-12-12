import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VendorShowcase from './components/VendorShowcase'
import ServicePackages from './components/ServicePackages'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-rose-50">
      <Navbar />
      <Hero />
      <VendorShowcase />
      <ServicePackages />
      <Footer />
    </div>
  )
}

export default App
