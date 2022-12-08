import readlineSync from 'readline-sync';
import userGreeting from '../cli.js';
import {
  RandomIntMaxPositive,
  numberOfQuestions,
  getRandomInt,
  correctAnswer,
  checkUserAnswer,
} from '../index.js';

export default () => {
  const userName = userGreeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let totalCorrectAnswers = 0;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const question = getRandomInt(RandomIntMaxPositive);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (checkUserAnswer(userAnswer, correctAnswer(question))) {
      totalCorrectAnswers += 1;
    } else {
      break;
    }
  }
  if (totalCorrectAnswers === numberOfQuestions) {
    console.log(`Congratulations, ${userName}!`);
  }
};
