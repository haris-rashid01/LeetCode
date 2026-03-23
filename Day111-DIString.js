/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let min = 0;
  let max = s.length;
  const result = [];
  for (let l of s) {
    if (l === "D") {
      result.push(max);
      max--;
    } else if (l === "I") {
      result.push(min);
      min++;
    }
  }
  result.push(max);

  return result;
};

let s = "IDID"
console.log(diStringMatch(s));
