import game from '../src/cli.js';
import readlineSync from 'readline-sync';

const name = game();
const BrainCalc = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i <= 2; i += 1) {
    const random1 = Math.floor(Math.random() * 100);
    const random2 = Math.floor(Math.random() * 100);
    const sign = '+-*';
    const randomsign = Math.floor(Math.random() * sign.length);
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
