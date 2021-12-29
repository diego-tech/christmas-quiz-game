import React, { useState } from 'react';

// Import Components
import QuestionCard from './components/QuestionCard';

// Import Api
import { fetchQuizQuestions, QuestionState } from './API';

// Import Styles

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESIONTS = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuizGame = async () => {};

  const checkAnswer = (e: any) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      <p>Hola React</p>
    </div>
  );
};

export default App;
