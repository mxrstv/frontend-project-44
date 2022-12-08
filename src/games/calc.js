import userGreeting from '../cli.js';
import game from '../game-starter.js';

export default () => {
  const userName = userGreeting();
  console.log('What is the result of the expression?');
  game(userName, 'calc');
};
