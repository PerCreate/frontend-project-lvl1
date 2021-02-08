/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import gcd from '../logic-game.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello,${userName}!`);
console.log('Find the greatest common divisor of given numbers.');

const question1 = String('15 5');
const question2 = String('30 3');
const question3 = String('24 4');
const answer1 = String('5');
const answer2 = String('3');
const answer3 = String('4');

gcd(question1, answer1, question2, answer2, question3, answer3, userName);
