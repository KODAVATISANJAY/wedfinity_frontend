import React from 'react';

function Results({ score, onRestart }) {
  return (
    <div className="w-full max-w-2xl">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16"></div>

        {/* Content */}
        <div className="relative z-10">
          <p className="text-lg text-blue-900 font-medium mb-4">Keep Learning!</p>
          
          <h1 className="text-5xl md:text-6xl font-serif text-blue-900 italic mb-4">
            Your Final score is
          </h1>
          
          <div className="text-7xl md:text-8xl font-bold text-blue-900 mb-2">
            {score}
          </div>
          
          <p className="text-2xl text-gray-400 mb-8">%</p>
          
          <button
            onClick={onRestart}
            className="bg-blue-100 hover:bg-blue-200 text-blue-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
          >
            Start Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default Results;
