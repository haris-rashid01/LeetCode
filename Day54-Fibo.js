    /**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n == 1) {
        return 1
    }
    else if(n == 0){
        return 0
    }
    else{
        return fib(n - 1) + fib(n - 2)
    }
};
let n = 3
console.log(fib(n));
