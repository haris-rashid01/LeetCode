/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let dis = [];
    let numSet = new Set(nums); 

    for (let i = 1; i <= nums.length; i++) {
        if (!numSet.has(i)) {
            dis.push(i);
        }
    }

    return dis;
};

let nums = [1, 1];
console.log(findDisappearedNumbers(nums));
