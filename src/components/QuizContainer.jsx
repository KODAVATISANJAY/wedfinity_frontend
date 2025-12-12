import React, { useState } from 'react';
import Quiz from './Quiz';
import Results from './Results';
import quizData from '../data/quizData.json';

function QuizContainer() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [answered, setAnswered] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + (100 / quizData.questions.length));
    }
    setSelectedAnswers([...selectedAnswers, isCorrect]);
    setAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestion + 1 < quizData.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      const prevIsCorrect = selectedAnswers[currentQuestion - 1];
      if (prevIsCorrect) {
        setScore(score - (100 / quizData.questions.length));
      }
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswers(selectedAnswers.slice(0, -1));
      setAnswered(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswers([]);
    setAnswered(false);
  };

  if (showResults) {
    return <Results score={Math.round(score)} onRestart={handleRestart} />;
  }

  return (
    <Quiz
      question={quizData.questions[currentQuestion]}
      questionNumber={currentQuestion + 1}
      totalQuestions={quizData.questions.length}
      onAnswerClick={handleAnswerClick}
      onNext={handleNext}
      onPrevious={handlePrevious}
      canGoPrevious={currentQuestion > 0}
      answered={answered}
      progress={(currentQuestion + 1) / quizData.questions.length}
    />
  );
}

export default QuizContainer;
