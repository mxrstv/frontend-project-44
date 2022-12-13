import { getRandomInt, RandomIntMaxPositive, gcd } from '../index.js';

const gameGCDDescription = 'Find the greatest common divisor of given numbers.';

const getGCDQuestion = () => {
  const firstNum = getRandomInt(RandomIntMaxPositive);
  const secondNum = getRandomInt(RandomIntMaxPositive);
  const question = `${firstNum} ${secondNum}`;
  return question;
};
const getCorrectGCDAnswer = (question) => {
  const nums = question.split(' ');
  const a = parseInt(nums[0], 10);
  const b = parseInt(nums[1], 10);
  const result = gcd(a, b);
  return `${result}`;
};

export {
  gameGCDDescription,
  getGCDQuestion,
  getCorrectGCDAnswer,
};
