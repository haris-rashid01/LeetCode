/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  let imageCopy = [];
  for (let i = 0; i < image.length; i++) {
    let flip = image[i].reverse();
    imageCopy.push(flip);
  }
  for (let i = 0; i < imageCopy.length; i++) {
    for (let j = 0; j < imageCopy.length; j++) {
      let digit = imageCopy[i][j];

      if (digit == 1) {
        imageCopy[i][j] = 0;
      } else {
        imageCopy[i][j] = 1;
      }
    }
  }
  return imageCopy;
};
let image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];
console.log(flipAndInvertImage(image));
