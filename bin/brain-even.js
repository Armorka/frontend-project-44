import game from '../src/cli.js';
import readlineSync from 'readline-sync';

const name = game();
const BrainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i <= 2; i += 1) {
    const random = Math.floor(Math.random() * 100);
    console.log(`Question: ${random}`);
    const otvet = readlineSync.question('Your answer: ');
    const quest = random % 2 === 0 ? 'yes' : 'no';
    if (otvet === quest) {
      console.log('Correct!');
    } else {
      console.log(`'${otvet}' is wrong answer ;(. Correct answer was '${quest}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default BrainEven();
