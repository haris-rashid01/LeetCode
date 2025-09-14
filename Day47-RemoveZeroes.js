/**
 * @param {number[]} nums
 * @return {void} 
 */
var moveZeroes = function (nums) {
    let count = 0
    for (let i = 0; i < nums.length;) {
        if (nums[i] == 0) {
            nums.splice(i, 1)
            count++
        }
        else {
            i++
        }
    }
    for (let i = 0; i < count; i++) {
        nums.push(0)
    }
    return nums

};
let nums = [0, 1, 0, 3, 12]
console.log(moveZeroes(nums));
