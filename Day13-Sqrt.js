/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function(x) {
    let result = Math.floor(x ** (1/2))
    return result    
};
let x = 8
console.log(mySqrt(x))