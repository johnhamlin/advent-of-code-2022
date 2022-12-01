import fs from 'fs';

const input = fs
  .readFileSync('./input', 'utf-8')
  .split('\n\n')
  .map(line => line.split('\n'))
  .map(arr => arr.map(n => +n));

const mostCalories = input.reduce((mostCalories, currentElf) => {
  const currentElfCalories = currentElf.reduce((a, b) => a + b);
  return Math.max(mostCalories, currentElfCalories);
}, 0);
console.log(mostCalories);

const topThreeCalories = input.reduce(
  (mostCalories, currentElf) => {
    const currentElfCalories = currentElf.reduce((a, b) => a + b);

    if (currentElfCalories > mostCalories[2]) {
      mostCalories.shift();
      mostCalories.push(currentElfCalories);
      return mostCalories;
    }

    if (currentElfCalories > mostCalories[1]) {
      mostCalories.splice(1, 1, currentElfCalories);
      return mostCalories;
    }

    if (currentElfCalories > mostCalories[0]) {
      mostCalories.shift();
      mostCalories.unshift(currentElfCalories);
      return mostCalories;
    }

    return mostCalories;
  },
  [0, 0, 0]
);

console.log(topThreeCalories.reduce((a, b) => a + b));
