import readlineSync from 'readline-sync';
import logika from '../src/index.js';
import getRandomNumber from '../src/math.js';
import getresult from '../src/generalProgression.js';

const BrainProgression = () => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i <= 2; i += 1) {
    const random1 = getRandomNumber();
    const random2 = getRandomNumber();
    const progress = getresult(random1, random2);
    const TrueOtvet = String(progress[1]);
    console.log(`Question: ${progress[0]}`);
    const otvet = readlineSync.question('Your answer: ');
    const attempt = logika(otvet, TrueOtvet, i);
    if (!attempt) {
      break;
    }
  }
};

export default BrainProgression();
