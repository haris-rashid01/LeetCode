/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let s = n.toString().split("");
  let sum = 0;
  let product = 1;
  for (let i = 0; i < s.length; i++) {
    let digit = parseInt(s[i]);
    sum += digit;
    product *= digit;
  }
  return product - sum
};
let n = 4421;
console.log(subtractProductAndSum(n));
