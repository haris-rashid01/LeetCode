/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let res = '', balance = 0, start = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === '(' ? balance++ : balance--;
        if (balance === 0) {
            res += s.slice(start + 1, i);
            start = i + 1;
        }
    }
    return res;
};
let s = "(()())(())"
console.log(removeOuterParentheses(s));
