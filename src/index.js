const RandomIntMaxPositive = 31;

const isEven = (n) => n % 2 === 0;

const isPrime = (n) => {
  let result = true;
  if (n === 1) {
    return result;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      result = false;
      break;
    }
  }
  return result;
};

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
  isPrime,
};
