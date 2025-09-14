/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= i + k && j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};

let nums = [1, 2, 3, 1, 2, 3], k = 2;
console.log(containsNearbyDuplicate(nums, k)); 
