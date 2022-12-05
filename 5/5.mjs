import fs from 'fs';
import _ from 'lodash';

const stacksPart1 = fs
  .readFileSync('./stacks_formatted.txt', 'utf-8')
  .trim()
  .split('\n')
  .map(pairs => pairs.split(/\W/));

const stacksPart2 = JSON.parse(JSON.stringify(stacksPart1));

const moves = fs
  .readFileSync('./moves.txt', 'utf-8')
  .trim()
  .split('\n')
  .map(moves => moves.split(/\D+/))
  .map(line => line.slice(1)); // First index is blank for some reason, so slice it off

moves.forEach(move => {
  const quantity = +move[0];
  const fromIndex = +move[1] - 1;
  const toIndex = +move[2] - 1;
  for (let i = 0; i < quantity; i++) {
    stacksPart1[toIndex].push(stacksPart1[fromIndex].pop());
  }
});

const part1 = stacksPart1.reduce((str, stack) => str + stack.at(-1), '');
console.log('Part I:', part1);

// PART II
moves.forEach(move => {
  const quantity = +move[0];
  const fromIndex = +move[1] - 1;
  const toIndex = +move[2] - 1;
  stacksPart2[toIndex].push(...stacksPart2[fromIndex].splice(-quantity));
});

const part2 = stacksPart2.reduce((str, stack) => str + stack.at(-1), '');
console.log('Part II:', part2);
