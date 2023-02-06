import readlineSync from 'readline-sync';
import game from '../src/cli.js';
import getRandomNumber from '../src/math.js';

const name = game();
const BrainCalc = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i <= 2; i += 1) {
    const random1 = getRandomNumber();
    const random2 = getRandomNumber();
    const sign = '+-*';
    const randomsign = getRandomNumber(0, sign.length - 1);
    const randsign = sign[randomsign];
    let TrueOtvet;
    console.log(`Question: ${random1} ${randsign} ${random2}`);
    const otvet = readlineSync.question('Your answer: ');
    if (randsign === '+') {
      TrueOtvet = String(random1 + random2);
    }
    if (randsign === '-') {
      TrueOtvet = String(random1 - random2);
    }
    if (randsign === '*') {
      TrueOtvet = String(random1 * random2);
    }
    if (otvet === TrueOtvet) {
      console.log('Correct!');
    } else {
      console.log(`'${otvet}' is wrong answer ;(. Correct answer was '${TrueOtvet}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default BrainCalc();
