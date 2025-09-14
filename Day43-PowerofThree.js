/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let x = 0
    while (3 ** x <= n) {
        if (3 ** x == n) {
            return true
        }
        x++
    }
    return false
};
let n = 27
console.log(isPowerOfThree(n));
