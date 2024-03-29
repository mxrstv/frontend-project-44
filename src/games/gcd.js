import getRandomInPosRange from '../getRandomInPosRange.js';
import gameProcess from '../index.js';

const gameGCDDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  const mod = a % b;
  return gcd(b, mod);
};

const generateRound = () => {
  const firstNum = getRandomInPosRange(0, 30);
  const secondNum = getRandomInPosRange(0, 30);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = gcd(firstNum, secondNum);
  return [question, `${correctAnswer}`];
};

export default () => { gameProcess(gameGCDDescription, generateRound); };
