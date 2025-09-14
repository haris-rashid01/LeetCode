/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
   let max = 0, count = 0

   for (const element of nums) {
        if (element == 1) {
            count++
            max = Math.max(max, count)
        }
        else{
            count = 0
        }
   }
   return max
};

let nums = [1, 0, 1, 1, 0, 1];
console.log(findMaxConsecutiveOnes(nums));
