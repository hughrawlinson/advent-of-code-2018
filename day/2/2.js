const fs = require('fs');
const input = fs.readFileSync('1.input').toString().split('\n');

function sum(a, b) {
  return a + b;
}

function levenstein(x, y) {
  const a = x.split('');
  const b = y.split('');
  return a.map((l, i) => l === b[i] ? 0 : 1).reduce(sum, 0);
}

input.forEach((el, i) => {
  const remaining = input.slice(i+1);

  remaining.forEach(rel => {
    if (levenstein(el, rel) === 1) {
      console.log(el, rel);
    }
  });
});

