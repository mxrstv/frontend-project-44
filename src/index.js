const RandomIntMaxPositive = 31;

const isEven = (n) => n % 2 === 0;

const getRandomInt = (max) => Math.floor(Math.random() * max);

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  const mod = a % b;
  return gcd(b, mod);
};

export {
  RandomIntMaxPositive,
  isEven,
  getRandomInt,
  gcd,
};
