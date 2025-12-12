import React from 'react';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import NavigationButtons from './NavigationButtons';
import Mascot from './Mascot';

function Quiz({
  question,
  questionNumber,
  totalQuestions,
  onAnswerClick,
  onNext,
  onPrevious,
  canGoPrevious,
  answered,
  progress,
}) {
  return (
    <div className="w-full max-w-2xl">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-50 rounded-full -ml-12 -mb-12"></div>

        {/* Main content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif text-blue-900 text-center mb-2 italic">
            Test Your Knowledge
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Answer all questions to see your results
          </p>

          {/* Progress Bar */}
          <ProgressBar progress={progress} />

          {/* Question Card */}
          <QuestionCard
            question={question}
            questionNumber={questionNumber}
            onAnswerClick={onAnswerClick}
            answered={answered}
          />

          {/* Navigation Buttons */}
          <NavigationButtons
            canGoPrevious={canGoPrevious}
            onPrevious={onPrevious}
            onNext={onNext}
            answered={answered}
            isLastQuestion={questionNumber === totalQuestions}
          />
        </div>
      </div>

      {/* Mascot */}
      <Mascot />
    </div>
  );
}

export default Quiz;
