import readlineSync from 'readline-sync';
import logika from '../src/index.js';
import getRandomNumber from '../src/math.js';
import isPrime from '../src/generalPrime.js';

const BrainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  for (let i = 0; i <= 2; i += 1) {
    const random = getRandomNumber();
    const TrueOrFalse = isPrime(random);
    let TrueOtvet;
    console.log(`Question: ${random}`);
    const otvet = readlineSync.question('Your answer: ');
    if (TrueOrFalse === true) {
      TrueOtvet = 'yes';
    } else (TrueOtvet = 'no');
    const attempt = logika(otvet, TrueOtvet, i);
    if (!attempt) {
      break;
    }
  }
};

export default BrainPrime();
