/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let n1 = BigInt(parseInt(num1))
    let n2 = BigInt(parseInt(num2))
    let sum = n1 + n2
    return sum.toString()
};
let num1 = "11", num2 = "123"
console.log(addStrings(num1, num2));
