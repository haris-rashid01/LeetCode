/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    while (num >= 10) {
        let digits = num.toString().split("");
        let result = 0;
        for (let i = 0; i < digits.length; i++) {
            result += parseInt(digits[i]);
        }
        num = result
    }
    return num;
};

let num = 38;
console.log(addDigits(num));
