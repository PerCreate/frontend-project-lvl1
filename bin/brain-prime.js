/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import isPrime from '../logic-game.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello,${userName}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const question1 = String('6');
const question2 = String('9');
const question3 = String('1');
const answer1 = String('no');
const answer2 = String('yes');
const answer3 = String('no');

isPrime(question1, answer1, question2, answer2, question3, answer3, userName);