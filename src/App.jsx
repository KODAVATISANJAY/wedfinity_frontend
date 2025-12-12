import { useState } from 'react'

function App() {

  const services = [
    {
      icon: '💍',
      title: 'Ceremony Planning',
      description: 'Create a magical ceremony tailored to your story'
    },
    {
      icon: '🍾',
      title: 'Reception Design',
      description: 'Elegant venues and décor that reflect your vision'
    },
    {
      icon: '📸',
      title: 'Vendor Network',
      description: 'Connected with the best photographers and caterers'
    },
    {
      icon: '🎨',
      title: 'Custom Styling',
      description: 'Personalized themes and color palettes'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah & James',
      text: 'Wedfinity made our wedding day absolutely perfect. Every detail was beautifully executed!',
      rating: 5
    },
    {
      name: 'Emma & Michael',
      text: 'Professional, creative, and so attentive. We couldn\'t have asked for better service.',
      rating: 5
    },
    {
      name: 'Lisa & David',
      text: 'From start to finish, they made everything so effortless. Highly recommend!',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-rose-600">✨ Wedfinity</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-rose-600 transition">Home</a>
              <a href="#services" className="text-gray-700 hover:text-rose-600 transition">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-rose-600 transition">Gallery</a>
              <a href="#testimonials" className="text-gray-700 hover:text-rose-600 transition">Reviews</a>
              <button className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Your Love Story,
                  <span className="text-rose-600"> Perfectly Planned</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Turn your dream wedding into reality with Wedfinity. We handle every detail so you can focus on the love.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-700 transition transform hover:scale-105">
                  Start Planning
                </button>
                <button className="border-2 border-rose-600 text-rose-600 px-8 py-4 rounded-full font-semibold hover:bg-rose-50 transition">
                  View Gallery
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div>
                  <p className="text-3xl font-bold text-rose-600">500+</p>
                  <p className="text-gray-600">Happy Couples</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-rose-600">1000+</p>
                  <p className="text-gray-600">Events Planned</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-rose-600">15+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-rose-300 to-pink-300 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-8xl opacity-30">💒</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <p className="font-semibold text-gray-900">5⭐ Rating</p>
                <p className="text-sm text-gray-600">on Google Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-xl text-gray-600">Comprehensive wedding planning solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition transform hover:translate-y-[-8px]">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-rose-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">What Couples Say</h3>
            <p className="text-xl text-rose-100">Real stories from happy clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Featured Weddings</h3>
            <p className="text-xl text-gray-600">Explore our portfolio of beautiful celebrations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-2xl shadow-lg h-64 bg-gradient-to-br from-rose-300 to-pink-400 flex items-center justify-center cursor-pointer">
                <div className="text-6xl group-hover:scale-110 transition">💕</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                  <p className="text-white font-semibold">View Details →</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Ready to Plan Your Dream Wedding?</h3>
          <p className="text-xl text-rose-100 mb-8">Let's create a day that's uniquely yours</p>
          <button className="bg-white text-rose-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-rose-50 transition transform hover:scale-105">
            Schedule Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-rose-400 mb-4">✨ Wedfinity</h4>
              <p className="text-gray-400">Your perfect wedding, perfectly planned</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-rose-400 transition">Planning</a></li>
                <li><a href="#" className="hover:text-rose-400 transition">Coordination</a></li>
                <li><a href="#" className="hover:text-rose-400 transition">Vendors</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-rose-400 transition">About</a></li>
                <li><a href="#" className="hover:text-rose-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-rose-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <p className="text-gray-400">📧 hello@wedfinity.com</p>
              <p className="text-gray-400">📱 1-800-WEDFINITY</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Wedfinity. All rights reserved. 💒</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
