/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(console.log(`Hello,${userName}!`));
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const isEven = () => {
  const numbers = [[15, 'no'], [30, 'yes'], [22, 'yes']];
  for (let i = 0; i < numbers.length; i += 1) {
    console.log(`Question: ${numbers[i][0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === numbers[i][1]) console.log('Correct!');
    else if (userAnswer !== numbers[i][1]) return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${numbers[i][1]}. \nLets try again, ${userName}!`);
  }
  return console.log(`Congratulations, ${userName}!`);
};
isEven();
