import { isEven, getRandomInt, RandomIntMaxPositive } from '../index.js';

const gameEvenOddDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEvenOddQuestion = () => getRandomInt(RandomIntMaxPositive);
const getCorrectEvenOddAnswer = (question) => (isEven(parseInt(question, 10)) ? 'yes' : 'no');

export {
  gameEvenOddDescription,
  getCorrectEvenOddAnswer,
  getEvenOddQuestion,
};
