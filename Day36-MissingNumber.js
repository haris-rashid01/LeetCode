/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let array = []
    for (let i = 0; i <= nums.length; i++) {
        array.push(i)
    }
    nums.sort((a, b) => a - b);
    for (let i = 0; i < array.length; i++) {
        if (array[i] != nums[i]) {
            return array[i]
        }
    }
    
};
let nums = [3,0,1]
console.log(missingNumber(nums));
