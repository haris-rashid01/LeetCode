/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let dup = [...t];

    for (let i = 0; i < s.length; i++) {
        let index = dup.indexOf(s[i]);

        if (index === -1) {
            return false; 
        }

        dup = dup.slice(index + 1); 
    }

    return true;
};

let s = "abc", t = "ahbgdc";
console.log(isSubsequence(s, t));
