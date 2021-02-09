#! /usr/bin/env node
import readlineSync from 'readline-sync';
import progression from '../logic-game.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello,${userName}`);
console.log('What number is missing in the progression?');

const question1 = String('15 20 25 30 .. 40 45 50');
const question2 = String('30 33 36 .. 42 45 48');
const question3 = String('22 30 38 46 54 .. 70');
const answer1 = String('35');
const answer2 = String('39');
const answer3 = String('62');

progression(question1, answer1, question2, answer2, question3, answer3, userName);
