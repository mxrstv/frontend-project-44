import { getRandomInt, RandomIntMaxPositive, isPrime } from '../index.js';

const gamePrimeDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeQuestion = () => {
  const num = getRandomInt(RandomIntMaxPositive);
  const question = `${num}`;
  const correctAnswer = (isPrime(question) ? 'yes' : 'no');
  return [question, correctAnswer];
};

export {
  gamePrimeDescription,
  getPrimeQuestion,
};
