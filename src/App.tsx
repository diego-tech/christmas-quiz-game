import React, { useState } from 'react';

// Import Components
import QuestionCard from './components/QuestionCard';
import LetterComponent from './components/LetterComponent';
import FireworkComponent from './components/FireworkComponent';

// Import Api
import { fetchQuizQuestions, QuestionState } from './API';

// Import Styles
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [startGame, setStartGame] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuizGame = async () => {
    setLoading(true);
    setGameOver(false);
    setStartGame(false);
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS);
    setQuestions(newQuestions);
    setNumber(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      // User's Answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);

      // Save tha answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // Move On to the next question if not the last question
    const nextQ = number + 1;

    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {startGame ? <LetterComponent callback={startQuizGame} /> : null}
        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {loading ? <p>Loading Questions... </p> : null}
        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}

        {(gameOver && !startGame) ||
        userAnswers.length === TOTAL_QUESTIONS + 1 ? (
          <FireworkComponent />
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
