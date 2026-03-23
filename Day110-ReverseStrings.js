/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let letters = [];
    
    for (let i = s.length - 1; i >= 0; i--) {
        if (/[a-zA-Z]/.test(s[i])) {
            letters.push(s[i]);
        }
    }

    let result = "";
    let j = 0;

    for (let i = 0; i < s.length; i++) {
        if (/[a-zA-Z]/.test(s[i])) {
            result += letters[j++];
        } else {
            result += s[i];
        }
    }

    return result;
};

let s = "ab-cd";
console.log(reverseOnlyLetters(s)); 
