import userGreeting from '../cli.js';
import game from '../game-starter.js';

export default () => {
  const userName = userGreeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  game(userName, 'even-odd');
};
