import React from 'react';

function NavigationButtons({
  canGoPrevious,
  onPrevious,
  onNext,
  answered,
  isLastQuestion,
}) {
  return (
    <div className="flex justify-between items-center gap-4 mt-8">
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious || !answered}
        className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
          canGoPrevious && answered
            ? 'bg-blue-100 text-blue-900 hover:bg-blue-200'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        ← Previous
      </button>

      <button
        onClick={onNext}
        disabled={!answered}
        className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
          answered
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {isLastQuestion ? 'Submit' : 'Next'} →
      </button>
    </div>
  );
}

export default NavigationButtons;
