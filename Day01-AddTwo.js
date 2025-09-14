/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(i == j){
                continue
            }
            if(nums[i]  + nums[j] == target){
                let a = i
                let b = j
                return `[${a}, ${b}]`
            }
        }

    }
    
};

let nums = [3,3,8,6767,67,6,76,7,67,], target = 74
console.log(twoSum(nums, target))