const RandomIntMaxPositive = 100;
const numberOfQuestions = 3;

const isEven = (n) => n % 2 === 0;

const getRandomInt = (max) => Math.floor(Math.random() * max);

const correctAnswer = (question) => (isEven(question) ? 'yes' : 'no');

const checkUserAnswer = (userAnswer, expectedAnswer) => {
  let result = false;
  if (userAnswer === expectedAnswer) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
    console.log("Let's try again, Bill!");
  }
  return result;
};

export {
  RandomIntMaxPositive,
  numberOfQuestions,
  getRandomInt,
  correctAnswer,
  checkUserAnswer,
};
