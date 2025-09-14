/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let number = BigInt(digits.join(""))
    number++
    let element = []
    let result = number.toString().split("")
    
    for (let i = 0; i < result.length; i++) {
        element[i] = parseInt(result[i])
    }
    return element    
};
let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
console.log(plusOne(digits))