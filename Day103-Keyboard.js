/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let r1 = "qwertyuiop";
  let r2 = "asdfghjkl";
  let r3 = "zxcvbnm";
  let result = [];
  let c1 = 0;
  let c2 = 0;
  let c3 = 0;
  for (let i = 0; i < words.length; i++) {
    (c1 = 0), (c2 = 0), (c3 = 0);
    let word = words[i];
    for (let j = 0; j < word.length; j++) {
      let letter = word[j].toLowerCase();
      if (r1.includes(letter)) {
        c1++;
      }
      if (r2.includes(letter)) {
        c2++;
      }
      if (r3.includes(letter)) {
        c3++;
      }
    }

    if (c1 == word.length || c2 == word.length || c3 == word.length) {
      result.push(word);
    }
  }
  return result;
};
let  words = ["adsdf","sfd"]
console.log(findWords(words));
