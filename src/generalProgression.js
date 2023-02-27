import getRandomNumber from "./math.js";

const getResult = (a) => {
  let result = [];
  const twomass = [];
  let two = getRandomNumber(1, 10);
  for (let i = 0; i < 10; i += 1) {
    a = a + two;
    result.push(a);
  }
  result[getRandomNumber(1, 10)] = '..';
  twomass.push(result.join(' '), two);
  return twomass;
};

export default getResult;
