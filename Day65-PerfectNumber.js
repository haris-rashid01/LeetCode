/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let result = 0
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            result += i
        }
        
    }
    if (result == num) {
        return true
    }
    else{
        return false
    }
    
};
let num = 7
console.log(checkPerfectNumber(num));
