import readlineSync from 'readline-sync';

const sameGameLogic = (question1, answer1, question2, answer2, question3, answer3, userName) => {
  const numbers = [[question1, answer1], [question2, answer2], [question3, answer3]];
  for (let i = 0; i < numbers.length; i += 1) {
    console.log(`Question: ${numbers[i][0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === numbers[i][1]) console.log('Correct!');
    else if (userAnswer !== numbers[i][1]) return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${numbers[i][1]}. \nLet's try again, ${userName}!`);
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default sameGameLogic;
