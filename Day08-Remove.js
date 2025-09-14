/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0
    for (let i = 0; i < nums.length;) {
        if (nums[i] == val) {
            nums.splice(i, 1)
            nums.push('_')
        }
        else {
            i++
        }
        
    }
    for (let j = 0; j < nums.length; j++) {
        if (typeof(nums[j]) == "number") {
            count++
        }
    }
   ;
    return nums, count
    
    
};
let nums = [3,2,2,3], val = 2
removeElement(nums, val)