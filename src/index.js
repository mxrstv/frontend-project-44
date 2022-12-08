const RandomIntMaxPositive = 11;
const numberOfQuestions = 3;

const isEven = (n) => n % 2 === 0;

const getRandomInt = (max) => Math.floor(Math.random() * max);

const calcOperators = ['+', '-', '*'];

const getCorrectEvenOddAnswer = (question) => (isEven(parseInt(question, 10)) ? 'yes' : 'no');

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

const getGameQuestion = (game) => {
  let question = '';
  switch (game) {
    case 'even-odd':
      question = getRandomInt(RandomIntMaxPositive);
      break;
    case 'calc': {
      const firstNum = getRandomInt(RandomIntMaxPositive);
      const secondNum = getRandomInt(RandomIntMaxPositive);
      const operator = calcOperators[getRandomInt(calcOperators.length)];
      question = `${firstNum} ${operator} ${secondNum}`;
      break;
    }
    default:
      console.log(`Error: wrong parameter game: ${game}`);
  }
  return question;
};

const getCorrectAnswer = (question, game) => {
  let answer = '';
  switch (game) {
    case 'even-odd':
      answer = getCorrectEvenOddAnswer(question);
      break;
    case 'calc':
      answer = getCorrectCalcAnswer(question);
      break;
    default:
      console.log(`Error: wrong parameter game: ${game}`);
  }
  return answer;
};
const checkUserAnswer = (userAnswer, expectedAnswer, userName) => {
  let result = false;
  if (userAnswer === expectedAnswer) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
  return result;
};

export {
  numberOfQuestions,
  getCorrectAnswer,
  checkUserAnswer,
  getGameQuestion,
};
