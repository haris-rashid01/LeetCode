/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let n1 = x.toString(2);
  let n2 = y.toString(2);
  let count = 0;
  let max = Math.max(n1.length, n2.length);

  n1 = n1.padStart(max, "0");
  n2 = n2.padStart(max, "0");

  for (let i = 0; i < n1.length; i++) {
    if (n1[i] != n2[i]) {
      count++;
    }
  }
  
  console.log(n1, n2);

  return count;
};
let x = 1,
  y = 4;
console.log(hammingDistance(x, y));
