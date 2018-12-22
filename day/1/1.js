const fs = require('fs');
const input = fs.readFileSync('1.input').toString().split('\n');

const result = input.reduce((result, value) => {
  const [sign, ...digits] = value;
  const number = parseInt(digits.join(''))
  return sign === '-' ? result - number : result + number;
}, 0);

console.log(result);
