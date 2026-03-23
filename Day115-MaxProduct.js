/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = Math.max(...nums)
    nums.splice(nums.indexOf(max), 1)
    let max2 = Math.max(...nums)

    return  (max-1)*(max2-1)
    
};
let nums = [3,7]
console.log(maxProduct(nums));

