/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word == word.toUpperCase()) {
        return true
    }
    else if(word == word.toLowerCase()){
        return true
    }
    else if(word == word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase()){
        return true
    }
    else{
        return false
    }
  
};
let word = "Leetcode"
console.log(detectCapitalUse(word));
