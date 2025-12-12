import React from 'react';

function Navigation({ currentPage, setCurrentPage }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="text-3xl">💍</div>
          <div>
            <h1 className="text-2xl font-bold text-blue-900 group-hover:text-blue-700 transition">Wedfinity</h1>
            <p className="text-xs text-blue-600">Your Love Story, Perfectly Planned</p>
          </div>
        </div>
        
        <div className="flex gap-6">
          <button
            onClick={() => setCurrentPage('home')}
            className={`font-medium transition ${
              currentPage === 'home'
                ? 'text-blue-900 border-b-2 border-blue-500'
                : 'text-gray-600 hover:text-blue-900'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('planning')}
            className={`font-medium transition ${
              currentPage === 'planning'
                ? 'text-blue-900 border-b-2 border-blue-500'
                : 'text-gray-600 hover:text-blue-900'
            }`}
          >
            Planning
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
