import React from 'react';

function QuestionCard({ question, questionNumber, onAnswerClick, answered }) {
  return (
    <div className="bg-blue-100 rounded-2xl p-6 mb-8">
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-6 text-center">
        {questionNumber}. {question.question}
      </h2>

      <div className="space-y-3">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onAnswerClick(option.isCorrect)}
            disabled={answered}
            className={`w-full p-4 rounded-lg text-center font-medium transition-all duration-300 ${
              answered
                ? option.isCorrect
                  ? 'bg-green-300 text-green-900'
                  : 'bg-gray-200 text-gray-600'
                : 'bg-white text-gray-800 hover:bg-blue-50 border-2 border-transparent hover:border-blue-300'
            } disabled:cursor-not-allowed`}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
