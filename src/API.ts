// Import Utils
import { shuffleArray } from './utils';

// Import Questions
import Questions from './questions/questions.json';

export type Question = {
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
};

export type QuestionState = Question & { answers: string[] };

export const fetchQuizQuestions = async (
  amount: number
): Promise<QuestionState[]> => {
  const data = await Questions;

  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
