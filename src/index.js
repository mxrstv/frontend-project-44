import readlineSync from 'readline-sync';
import greetingUser from './cli.js';

const numberOfQuestions = 3;

const gameProcess = (gameDescription, generateRound) => {
  const userName = greetingUser();
  console.log(gameDescription);
  let correctAnswers = 0;
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (correctAnswers === numberOfQuestions) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default gameProcess;
