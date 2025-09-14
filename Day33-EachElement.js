/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i], i))
        
    }
    return newArr
    
    
};
arr = [10,20,30], fn = function constant() { return 42; }
console.log(map(arr, fn));
