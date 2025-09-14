/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let result = 1
    for (let i = 0; i < nums.length; i++) {
        result *= nums[i]
    }
    if (result > 0) {
        return 1
    }
    else if(result < 0){
        return -1
    }
    else{
        return 0
    }
};
let nums = [3,5,63,0]
console.log(arraySign(nums));
