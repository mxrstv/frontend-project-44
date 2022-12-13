import { getRandomInt, RandomIntMaxPositive } from '../index.js';

const gameProgressionDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgressionQuestion = () => {
  const hiddenNum = getRandomInt(10);
  const step = getRandomInt(10);
  const start = getRandomInt(RandomIntMaxPositive);
  let next = start;
  let question = '';
  let correctAnswer = '';
  for (let i = 0; i < progressionLength; i += 1) {
    next += step;
    if (i === hiddenNum) {
      question = `${question} ..`;
      correctAnswer = `${next}`;
    } else {
      question = `${question} ${next}`;
    }
  }
  return [question.trim(), correctAnswer];
};

const getCorrectProgressionAnswer = (question) => {
  const nums = question.split(' ');
  indexOfHidden = nums.indexOf('..');
  if (indexOfHidden >= nums.length / 2) {

  }
};

export {
  gameProgressionDescription,
  getProgressionQuestion,
  getCorrectProgressionAnswer,
};