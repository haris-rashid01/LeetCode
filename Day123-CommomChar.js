/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let common = words[0].split('');

  for (let i = 1; i < words.length; i++) {
    let newCommon = [];
    let current = words[i].split('');

    for (let ch of common) {
      let index = current.indexOf(ch);
      if (index !== -1) {
        newCommon.push(ch);
        current.splice(index, 1); 
      }
    }

    common = newCommon;
  }

  return common;
};

let words = ["bella", "label", "roller"];
console.log(commonChars(words));
