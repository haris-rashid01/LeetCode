
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverse = x.toString().split("").reverse().join("")
    console.log(reverse)
    let num = parseInt(reverse)
    if (x == num){
        return true
    }
    else{
        return false
    }
};

let x = -121
console.log(isPalindrome(x))