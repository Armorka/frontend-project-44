import getRandomNumber from './math.js';

const getResult = (a) => {
  const result = [];
  const twomass = [];
  const two = getRandomNumber(1, 10);
  let one = a;
  for (let i = 0; i < 10; i += 1) {
    one += two;
    result.push(one);
  }
  result[getRandomNumber(1, 10)] = '..';
  twomass.push(result.join(' '), two);
  return twomass;
};

export default getResult;
