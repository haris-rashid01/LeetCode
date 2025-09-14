/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = 0
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            index = i
            return index
        }
        else {
            nums.push(target)
            nums.sort((a, b) => a - b)
            index = nums.indexOf(target)
            return index
        }

        
    }
    
    
};
let nums = [1001], target = 2
console.log(searchInsert(nums, target))
