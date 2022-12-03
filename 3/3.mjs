import fs from 'fs';
import _ from 'lodash';

const input = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');

// PART I
const matches = input
  .map(line => {
    const mid = line.length / 2;
    return [line.slice(0, mid), line.slice(mid)];
  })
  .map(rucksack => {
    for (const item of rucksack[0]) if (rucksack[1].includes(item)) return item;
  });

function prioritize(char) {
  const lowerCaseOffset = 96;
  const upperCaseOffset = 38;
  if (char.match(/[a-z]/)) return char.charCodeAt(0) - lowerCaseOffset;
  if (char.match(/[A-Z]/)) return char.charCodeAt(0) - upperCaseOffset;
}

const sum = matches.reduce((sum, match) => sum + prioritize(match), 0);
console.log('Part I:', sum);

// PART II
const groups = [];
for (let i = 0; i < input.length; i += 3) {
  groups.push(input.slice(i, i + 3));
}
const groupsArr = groups.map(group => {
  return [group[0].split(''), group[1].split(''), group[2].split('')];
});

const badges = groupsArr
  .map(group => _.intersection(...group))
  .map(badge => badge[0]);

const badgesSum = badges.reduce((sum, match) => sum + prioritize(match), 0);
console.log('Part II:', badgesSum);
