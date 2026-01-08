/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let word = "balloon";
  let obj = {};
  let letter;
  for (let i = 0; i < word.length; i++) {
    letter = word[i];
    let count = 0;
    for (let j = 0; j < text.length; j++) {
      if (letter == text[j]) {
        count++;
      }
    }
    obj[letter] = count;
  }
  return Math.min(
    obj.b,
    obj.a,
    Math.floor(obj.l / 2),
    Math.floor(obj.o / 2),
    obj.n
  );
};
let text = "nlaebolko";
console.log(maxNumberOfBalloons(text));
