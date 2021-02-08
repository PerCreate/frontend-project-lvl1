/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import calc from '../logic-game.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello,${userName}!`);
console.log('What is the result of the expression?');

const question1 = String('15 + 6');
const question2 = String('30 / 3');
const question3 = String('22 * 4');
const answer1 = String('21');
const answer2 = String('10');
const answer3 = String('88');

calc(question1, answer1, question2, answer2, question3, answer3, userName);
