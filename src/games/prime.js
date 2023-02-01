import getRandomInPosRange from '../getRandomInPosRange.js';
import gameProcess from '../index.js';

const gamePrimeDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  let result = true;
  if (n === 1) {
    return result;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      result = false;
      break;
    }
  }
  return result;
};

const generateRound = () => {
  const num = getRandomInPosRange();
  const question = `${num}`;
  const correctAnswer = (isPrime(question) ? 'yes' : 'no');
  return [question, correctAnswer];
};

export default () => { gameProcess(gamePrimeDescription, generateRound); };
