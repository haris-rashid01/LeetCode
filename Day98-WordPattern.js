/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let sArray = s.split(" ");
  let patternArray = pattern.split("");

  if (sArray.length !== patternArray.length) return false;

  for (let i = 0; i < patternArray.length; i++) {
    console.log(patternArray.indexOf(patternArray[i]), sArray.indexOf(sArray[i]));
    
    if (patternArray.indexOf(patternArray[i]) !== sArray.indexOf(sArray[i])) {
      return false;
    }
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
