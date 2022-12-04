import fs from 'fs';
import _ from 'lodash';

const input = fs
  .readFileSync('./input.txt', 'utf-8')
  .trim()
  .split('\n')
  .map(pairs => pairs.split(','))
  .map(pairs => pairs.map(pair => pair.split('-')))
  .map(pairs => pairs.map(pair => pair.map(num => +num)));

const part1 = input.reduce((count, pair) => {
  if (pair[0][0] >= pair[1][0] && pair[0][1] <= pair[1][1]) {
    return count + 1;
  }
  if (pair[1][0] >= pair[0][0] && pair[1][1] <= pair[0][1]) {
    return count + 1;
  }
  return count;
}, 0);

console.log('Part I:', part1);

const part2 = input.reduce((count, pair) => {
  if (pair[0][0] <= pair[1][1] && pair[0][1] >= pair[1][0]) {
    return count + 1;
  }
  return count;
}, 0);

console.log('Part II:', part2);
