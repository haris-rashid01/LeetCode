/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let element = 0
    for (let i = 0; i < nums.length; i++) {
         
        element = nums[i]
        for (let j = i+1; j < nums.length;) {
            if (element == nums[j]) {
                nums.splice(j, 1)
            }
            else {
                j++
            }
        }
    }
    return nums

}
nums = [1,1,2]
console.log(removeDuplicates(nums))
