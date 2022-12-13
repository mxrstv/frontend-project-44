import { isEven, getRandomInt, RandomIntMaxPositive } from '../index.js';

const gameEvenOddDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEvenOddQuestion = () => {
  const question = getRandomInt(RandomIntMaxPositive);
  const correctAnswer = (isEven(question) ? 'yes' : 'no');
  return [`${question}`, correctAnswer];
};

export {
  gameEvenOddDescription,
  getEvenOddQuestion,
};
