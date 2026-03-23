/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let result = [];
  let sum = 0;
  for (let i = 0; i < operations.length; i++) {
    let value = operations[i];

    if (value === "C") {
      result.pop();
    } else if (value === "D") {
      result.push(result[result.length - 1] * 2);
    } else if (value === "+") {
      result.push(
        result[result.length - 1] + result[result.length - 2] || result[0]
      );
    } else {
      result.push(parseInt(value));
    }
  }

  for (let i = 0; i < result.length; i++) {
    sum += result[i];
  }
  return sum;
};
let ops = ["5", "-2", "4", "C", "D", "9", "+", "+"];
console.log(calPoints(ops));
