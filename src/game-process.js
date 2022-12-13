import readlineSync from 'readline-sync';
import userGreeting from './cli.js';
import { gameEvenOddDescription, getEvenOddQuestion } from './games/even-odd.js';
import { gameCalcDescription, getCalcQuestion } from './games/calc.js';
import { gameGCDDescription, getGCDQuestion } from './games/gcd.js';
import { gameProgressionDescription, getProgressionQuestion } from './games/progression.js';

const numberOfQuestions = 3;

const getGameDescription = (game) => {
  let gameDescription;
  switch (game) {
    case 'calc':
      gameDescription = gameCalcDescription;
      break;
    case 'even-odd':
      gameDescription = gameEvenOddDescription;
      break;
    case 'gcd':
      gameDescription = gameGCDDescription;
      break;
    case 'progression':
      gameDescription = gameProgressionDescription;
      break;
    default:
      console.log(`Error: wrong parameter game: ${game}`);
  }
  return gameDescription;
};
const getGameQuestion = (game) => {
  let question = '';
  switch (game) {
    case 'even-odd':
      question = getEvenOddQuestion();
      break;
    case 'calc':
      question = getCalcQuestion();
      break;
    case 'gcd':
      question = getGCDQuestion();
      break;
    case 'progression':
      question = getProgressionQuestion();
      break;
    default:
      console.log(`Error: wrong parameter game: ${game}`);
  }
  return question;
};

const checkUserAnswer = (userAnswer, expectedAnswer, userName) => {
  let result = false;
  if (userAnswer === expectedAnswer) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
  return result;
};

export default (game) => {
  const userName = userGreeting();
  const gameDescription = getGameDescription(game);
  console.log(gameDescription);
  let totalCorrectAnswers = 0;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const [question, correctAnswer] = getGameQuestion(game);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (checkUserAnswer(userAnswer, correctAnswer, userName)) {
      totalCorrectAnswers += 1;
    } else {
      break;
    }
  }
  if (totalCorrectAnswers === numberOfQuestions) {
    console.log(`Congratulations, ${userName}!`);
  }
};
