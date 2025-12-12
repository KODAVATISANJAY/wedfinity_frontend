import React from 'react';

function Mascot() {
  return (
    <div className="absolute bottom-0 left-4 md:left-8 -mb-12 md:-mb-16 animate-bounce">
      {/* Mascot Container */}
      <div className="relative w-20 h-24 md:w-28 md:h-32">
        {/* Paw Print - cute pink paw */}
        <svg
          viewBox="0 0 100 120"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main paw pad */}
          <circle cx="50" cy="90" r="18" fill="#f9a8d4" />
          {/* Toe pads */}
          <circle cx="25" cy="50" r="12" fill="#f9a8d4" />
          <circle cx="50" cy="35" r="12" fill="#f9a8d4" />
          <circle cx="75" cy="50" r="12" fill="#f9a8d4" />
        </svg>
      </div>

      {/* Speech Bubble */}
      <div className="mt-2 md:mt-4 bg-white rounded-xl shadow-lg p-2 md:p-3 whitespace-nowrap relative">
        <p className="text-xs md:text-sm font-semibold text-blue-900">Best of Luck!</p>
        {/* Bubble tail */}
        <div className="absolute -bottom-1 left-3 w-2 h-2 bg-white rotate-45"></div>
      </div>
    </div>
  );
}

export default Mascot;
