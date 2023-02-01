import getRandomInPosRange from '../getRandomInPosRange.js';
import gameProcess from '../index.js';

const gameProgressionDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const generateRound = () => {
  const hiddenNum = getRandomInPosRange(0, 10);
  const step = getRandomInPosRange(0, 10);
  const start = getRandomInPosRange();
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

export default () => { gameProcess(gameProgressionDescription, generateRound); };
