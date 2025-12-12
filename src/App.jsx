import React, { useState } from 'react';
import QuizContainer from './components/QuizContainer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-cyan-200 flex items-center justify-center p-4">
      <QuizContainer />
    </div>
  );
}

export default App;
