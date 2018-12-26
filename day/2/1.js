const fs = require('fs');
const input = fs.readFileSync('1.input').toString().split('\n');

const result = input.reduce((result, value) => {
  const histogram = value.split('').reduce((result, letter) => ({
    ...result,
    [letter]: result[letter] ? result[letter] + 1 : 1
  }), {});
  console.log(Object.entries(histogram).filter(([_, count]) => count >= 2));
  const idDuplicates = Object.entries(histogram).reduce((acc, [_, count]) => ({
    2: acc['2'] || (count === 2 ? 1 : 0),
    3: acc['3'] || (count === 3 ? 1 : 0)
  }), {2:0,3:0});
  return {
    2: result[2] + idDuplicates[2],
    3: result[3] + idDuplicates[3]
  };
}, {2:0, 3:0});

console.log(result);
console.log(result['2'] * result['3']);
