/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num >= 0) {
        return num.toString(16)
    }
    else{
        return (2 ** 32 + num).toString(16)
    }
};
let num = -1
console.log(toHex(num));

