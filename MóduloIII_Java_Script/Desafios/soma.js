const A = 1;
const B = 1000;
var total = A;
const diff = B - A;
for (let i = 1; i <= diff; i++) {
  total += (A + i);
};

console.log(total);