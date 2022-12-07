import readlineSync from 'readline-sync';
import userGreeting from './cli.js';

const RandomIntMaxPositive = 100;
const numberOfQuestions = 3;

const isEven = (n) => n % 2 === 0;

const getRandomInt = (max) => Math.floor(Math.random() * max);

const correctAnswer = (question) => (isEven(question) ? 'yes' : 'no');

const checkUserAnswer = (userAnswer, expectedAnswer) => {
  let result = false;
  if (userAnswer === expectedAnswer) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
    console.log("Let's try again, Bill!");
  }
  return result;
};

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
