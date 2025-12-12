import React from 'react';

function Hero({ setCurrentPage }) {
  return (
    <div className="relative min-h-[600px] bg-gradient-to-r from-blue-100 via-cyan-50 to-blue-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20 flex items-center justify-between">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-5xl font-bold text-blue-900 mb-4">Your Perfect Wedding Awaits</h2>
          <p className="text-xl text-gray-700 mb-6 max-w-lg">From dreams to reality - Let us help you plan the most beautiful day of your life with our comprehensive wedding planning services.</p>
          
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentPage('planning')}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition transform hover:-translate-y-1"
            >
              Start Planning
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Get in Touch
            </button>
          </div>
          
          {/* Stats */}
          <div className="flex gap-8 mt-12">
            <div>
              <p className="text-3xl font-bold text-blue-900">500+</p>
              <p className="text-gray-600">Happy Couples</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-900">1000+</p>
              <p className="text-gray-600">Events Planned</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-900">15+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
        
        {/* Image/Illustration */}
        <div className="flex-1 text-center">
          <div className="text-9xl animate-bounce">💍</div>
          <p className="text-gray-600 mt-4">Making Memories Since 2010</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
