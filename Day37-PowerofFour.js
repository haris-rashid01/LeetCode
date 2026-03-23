/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let x = 0
    while (3 ** x <= n) {
        if (3 ** x == n) {
            return true
        }
        x++
    }
    return false
};
let n = 9
console.log(isPowerOfFour(n));