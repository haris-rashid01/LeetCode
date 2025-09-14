/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = []
    while (n != 1 && !seen.includes(n)) {
        seen.push(n)
        let digits = n.toString().split("");
        let result = 0;
        for (let i = 0; i < digits.length; i++) {
            result += parseInt(digits[i]) ** 2;
        }
        n = result        
    }
    return n == 1
};

let n = 2;
console.log(isHappy(n));
