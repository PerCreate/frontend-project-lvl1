#! /usr/bin/env node
import readlineSync from 'readline-sync';
import isEven from '../logic-game.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello,${userName}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const question1 = 15;
const question2 = 30;
const question3 = 22;
const answer1 = 'no';
const answer2 = 'yes';
const answer3 = 'yes';

isEven(question1, answer1, question2, answer2, question3, answer3, userName);
