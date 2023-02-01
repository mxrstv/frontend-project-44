import getRandomInPosRange from '../getRandomInPosRange.js';

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

const getPrimeQuestion = () => {
  const num = getRandomInPosRange(0, 100);
  const question = `${num}`;
  const correctAnswer = (isPrime(question) ? 'yes' : 'no');
  return [question, correctAnswer];
};

export {
  gamePrimeDescription,
  getPrimeQuestion,
};
