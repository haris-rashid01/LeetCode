/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let x = 0
    while (4 ** x <= n) {
        if (4 ** x == n) {
            return true
        }
        x++
    }
    return false
};
let n = 9
console.log(isPowerOfFour(n));