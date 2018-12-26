const fs = require('fs');
const input = fs.readFileSync('1.input').toString().split('\n');

let firstRepeatedValue = null;

let result = input.reduce((result, value) => {
  const [sign, ...digits] = value;
  const number = parseInt(digits.join(''))
  const last = result[result.length - 1];
  const newNumber = sign === '-' ? last - number : last + number;
  const newResult = [...result, newNumber];
  if (firstRepeatedValue === null) {
    result.forEach(r => {
      if (r === newNumber) {
        firstRepeatedValue = newNumber;
      }
    });
  }
  return newResult;
}, [0]);

while (firstRepeatedValue === null) {
  result = input.reduce((result, value) => {
    const [sign, ...digits] = value;
    const number = parseInt(digits.join(''))
    const last = result[result.length - 1];
    const newNumber = sign === '-' ? last - number : last + number;
    const newResult = [...result, newNumber];
    if (firstRepeatedValue === null) {
      result.forEach(r => {
        if (r === newNumber) {
          firstRepeatedValue = newNumber;
        }
      });
    }
    return newResult;
  }, result);
};

console.log(result);

console.log(firstRepeatedValue);
