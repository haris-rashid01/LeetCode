/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let nums = []
    let xor = 0
    for (let i = 0; i < n; i++) {
        nums[i] = start + 2 * i
    }
    console.log(nums);
    for (let i = 0; i < n; i++) {
        xor ^= nums[i]
    }
    return xor
};
let n = 5, start = 0
console.log(xorOperation(n, start));
