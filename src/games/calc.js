import getRandomInPosRange from '../getRandomInPosRange.js';
import gameProcess from '../index.js';

const gameCalcDescription = 'What is the result of the expression?';
const calcOperators = ['+', '-', '*'];

const getCorrectCalcAnswer = (question) => {
  const exp = question.split(' ');
  const operator = exp[1];
  const a = parseInt(exp[0], 10);
  const b = parseInt(exp[2], 10);
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      console.log(`Operator ${operator} undefined`);
  }
  return `${result}`;
};

const generateRound = () => {
  const firstNum = getRandomInPosRange(0, 20);
  const secondNum = getRandomInPosRange(0, 20);
  const operator = calcOperators[getRandomInPosRange(0, calcOperators.length - 1)];
  const question = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = getCorrectCalcAnswer(question);
  return [question, correctAnswer];
};

export default () => { gameProcess(gameCalcDescription, generateRound); };
