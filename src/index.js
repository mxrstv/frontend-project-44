const RandomIntMaxPositive = 11;

const isEven = (n) => n % 2 === 0;

const getRandomInt = (max) => Math.floor(Math.random() * max);

export {
  RandomIntMaxPositive,
  isEven,
  getRandomInt,
};
