/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let result = []

    for (let i = 0; i < nums.length; i++) {
        let number = nums[i]
        let count = 0
        for (let j = 0; j < nums.length; j++) {
            if (i==j) {
                continue;
            }
            if (nums[j] < number) {
                count++
            }
        }
        result.push(count)
    }
    return result
};
let nums = [8,1,2,2,3]
console.log(smallerNumbersThanCurrent(nums));
