/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let i = 0
    while(i * i <= num){
        if (i * i == num) {
            return true
        }
        i++
    }
    return false
};
let num = 64
console.log(isPerfectSquare(num));
