/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let degree = 0;
    let freq = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        freq[num] = (freq[num] || 0) + 1;
        degree = Math.max(degree, freq[num]);
    }

    let minLength = nums.length;

    for (let num in freq) {
        if (freq[num] === degree) {
            let first = -1, last = -1;
            
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] == num) {
                    if (first === -1) first = i;
                    last = i;
                }
            }

            let length = last - first + 1;
            minLength = Math.min(minLength, length);
        }
    }

    return minLength;
};


let nums = [1, 2, 2, 3, 1, 2, 1, 1, 3, 3, 3, 3];
console.log(findShortestSubArray(nums)); 
