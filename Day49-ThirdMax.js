/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let element = 0
    for (let i = 0; i < nums.length; i++) {

        element = nums[i]
        for (let j = i + 1; j < nums.length;) {
            if (element == nums[j]) {
                nums.splice(j, 1)
            }
            else {
                j++
            }
        }
    }
    if (nums.length < 3) {
        return Math.max(...nums)
    }
    nums.sort((a, b) => a - b);
    
    return nums[nums.length - 3]
};
let nums = [3,2,1]
console.log(thirdMax(nums));

