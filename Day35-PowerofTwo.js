/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let x = 0
    while (2 ** x <= n) {
        if (2 ** x == n) {
            return true
        }
        x++
    }
    return false
};
let n = 14
console.log(isPowerOfTwo(n));
