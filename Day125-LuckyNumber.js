/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        continue;
      } else {
        if (arr[i] === arr[j]) {
          count++;
        }
      }
    }
    obj[arr[i]] = count;
  }
  let max = 0;
  for (const key in obj) {
    if (parseInt(key) === obj[key]) {
      if (obj[key] > max) {
        max = obj[key];
      }
    }
  }
  if (max > 0 ) {
    return max
  }
  return -1;
};
let arr = [1, 2, 2, 3, 3, 3];
console.log(findLucky(arr));
