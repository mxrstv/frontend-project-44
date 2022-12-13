import { getRandomInt, RandomIntMaxPositive, gcd } from '../index.js';

const gameGCDDescription = 'Find the greatest common divisor of given numbers.';

const getGCDQuestion = () => {
  const firstNum = getRandomInt(RandomIntMaxPositive);
  const secondNum = getRandomInt(RandomIntMaxPositive);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = gcd(firstNum, secondNum);
  return [question, `${correctAnswer}`];
};

export {
  gameGCDDescription,
  getGCDQuestion,
};
