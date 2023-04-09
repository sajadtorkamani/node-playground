import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
const answer = await rl.question('What is your name? ');
console.log(`Your name is ${answer}`);

rl.close();
