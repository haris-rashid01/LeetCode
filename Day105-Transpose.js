/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    let transpose = []
  for (let i = 0; i < matrix[0].length; i++) {
    let temp = []
    for (let j = 0; j < matrix.length; j++) {
      temp.push(matrix[j][i])
    }
    transpose.push(temp)
  }
  return transpose

};
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(transpose(matrix));

