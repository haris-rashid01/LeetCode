/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filtered = []

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filtered.push(arr[i])
        }
    }
    return filtered
};
arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
console.log(filter(arr, fn));
