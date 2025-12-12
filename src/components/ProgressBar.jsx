import React from 'react';

function ProgressBar({ progress }) {
  return (
    <div className="flex gap-2 mb-8 justify-center">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`h-1 rounded-full transition-all duration-500 ${
            i / 4 <= progress
              ? 'bg-blue-900 w-16'
              : 'bg-gray-300 w-12'
          }`}
        ></div>
      ))}
    </div>
  );
}

export default ProgressBar;
