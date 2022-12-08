import readlineSync from 'readline-sync';
import userGreeting from './cli.js';
import { gameEvenOddDescription, getEvenOddQuestion, getCorrectEvenOddAnswer } from './games/even-odd.js';
import { gameCalcDescription, getCalcQuestion, getCorrectCalcAnswer } from './games/calc.js';

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
    case 'calc': {
      question = getCalcQuestion();
      break;
    }
    default:
      console.log(`Error: wrong parameter game: ${game}`);
  }
  return question;
};

const getCorrectAnswer = (question, game) => {
  let answer = '';
  switch (game) {
    case 'even-odd':
      answer = getCorrectEvenOddAnswer(question);
      break;
    case 'calc':
      answer = getCorrectCalcAnswer(question);
      break;
    default:
      console.log(`Error: wrong parameter game: ${game}`);
  }
  return answer;
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
