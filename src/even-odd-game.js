import readlineSync from 'readline-sync';

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

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const question = getRandomInt(100);
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  checkUserAnswer(userAnswer, correctAnswer(question));
};
