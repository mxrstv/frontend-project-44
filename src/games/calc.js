import { getRandomInt, RandomIntMaxPositive } from '../index.js';

const gameCalcDescription = 'What is the result of the expression?';
const calcOperators = ['+', '-', '*'];

const getCalcQuestion = () => {
  const firstNum = getRandomInt(RandomIntMaxPositive);
  const secondNum = getRandomInt(RandomIntMaxPositive);
  const operator = calcOperators[getRandomInt(calcOperators.length)];
  const question = `${firstNum} ${operator} ${secondNum}`;
  return question;
};

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

export {
  gameCalcDescription,
  getCalcQuestion,
  getCorrectCalcAnswer,
};
