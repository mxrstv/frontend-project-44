import readlineSync from 'readline-sync';
import {
  numberOfQuestions,
  getGameQuestion,
  getCorrectAnswer,
  checkUserAnswer,
} from './index.js';

export default (userName, game) => {
  let totalCorrectAnswers = 0;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const question = getGameQuestion(game);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (checkUserAnswer(userAnswer, getCorrectAnswer(question, game), userName)) {
      totalCorrectAnswers += 1;
    } else {
      break;
    }
  }
  if (totalCorrectAnswers === numberOfQuestions) {
    console.log(`Congratulations, ${userName}!`);
  }
};
