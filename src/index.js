import game from '../src/cli.js';

const name = game();
const logika = () => {
  for (let i = 0; i <= 2; i += 1) {
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
 }
}