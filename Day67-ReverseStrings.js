/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let x = s.split(" ")
    for (let i = 0; i < x.length; i++) {
        x[i] = x[i].split('').reverse().join("")
    }
    return x.join(" ")
};
let s = "Let's take LeetCode contest"
console.log(reverseWords(s));
