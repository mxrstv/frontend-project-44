import getRandomInPosRange from '../getRandomInPosRange.js';

const isEven = (n) => n % 2 === 0;
const gameEvenOddDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEvenOddQuestion = () => {
  const question = getRandomInPosRange(0, 100);
  const correctAnswer = (isEven(question) ? 'yes' : 'no');
  return [`${question}`, correctAnswer];
};

export {
  gameEvenOddDescription,
  getEvenOddQuestion,
};
