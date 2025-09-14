/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let con = s + s
    return con.slice(1, con.length - 1).includes(s)
};