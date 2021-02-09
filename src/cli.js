/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const cli = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${userName}`);
};
export default cli;
