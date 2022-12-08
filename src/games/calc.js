import readlineSync from 'readline-sync';
import userGreeting from '../cli.js';
import {
  numberOfQuestions,
  getGameQuestion,
  correctAnswer,
  checkUserAnswer,
} from '../index.js';

export default () => {
  const userName = userGreeting();
  const game = 'calc';
  console.log('What is the result of the expression?');
  let totalCorrectAnswers = 0;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const question = getGameQuestion(game);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (checkUserAnswer(userAnswer, correctAnswer(question, game), userName)) {
      totalCorrectAnswers += 1;
    } else {
      break;
    }
  }
  if (totalCorrectAnswers === numberOfQuestions) {
    console.log(`Congratulations, ${userName}!`);
  }
};
