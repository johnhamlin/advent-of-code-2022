import fs from 'fs';

const input = fs
  .readFileSync('./input', 'utf-8')
  .trim()
  .split('\n')
  .map(pair => pair.split(' '));

const partOneScoreTable = {
  A: {
    X: 4,
    Y: 8,
    Z: 3,
  },
  B: {
    X: 1,
    Y: 5,
    Z: 9,
  },
  C: {
    X: 7,
    Y: 2,
    Z: 6,
  },
};
let score = 0;

input.forEach(([opponentMove, myMove]) => {
  score += partOneScoreTable[opponentMove][myMove];
});
console.log('Part One Score: ' + score);

// PART TWO
const partTwoScoreTable = {
  A: {
    X: 3,
    Y: 4,
    Z: 8,
  },
  B: {
    X: 1,
    Y: 5,
    Z: 9,
  },
  C: {
    X: 2,
    Y: 6,
    Z: 7,
  },
};

score = 0;
input.forEach(([opponentMove, myMove]) => {
  score += partTwoScoreTable[opponentMove][myMove];
});

console.log('Part Two Score: ' + score);
