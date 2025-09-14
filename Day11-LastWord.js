/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let trimmed = s.trim()
    let index = trimmed.lastIndexOf(" ")
    let lastWord = ""
    for (let i = index + 1; i < trimmed.length; i++) {
        lastWord += s[i]
    }
    return lastWord.length
    
};
let s = " Hello World"
console.log(lengthOfLastWord(s))