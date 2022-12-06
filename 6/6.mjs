import fs from 'fs';
import _ from 'lodash';

const input = fs.readFileSync('./input.txt', 'utf-8').trim();

function findMarker(str, markerLength) {
  let left = 0;
  let right = markerLength - 1;

  while (right < str.length) {
    const subStr = str.slice(left, right + 1);
    if (new Set(subStr).size === markerLength) {
      console.log(subStr);
      return right + 1;
    }
    left++;
    right++;
  }
}

const part1 = findMarker(input, 4);
const part2 = findMarker(input, 14);
console.log('Part I:', part1);
console.log('Part II:', part2);
