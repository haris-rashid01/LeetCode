/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result = []
    let sum = 0
    
    for (let i = 0; i < nums.length; i++) {
        sum = 0
       for (let j = 0; j <= i; j++) {
            sum += nums[j]            
       }
        result.push(sum)
    }
    return result
};
let nums = [1,2,3,4]
console.log(runningSum(nums));
