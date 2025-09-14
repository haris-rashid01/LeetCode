/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = [];
    let nums2Copy = [...nums2]

    for (let i = 0; i < nums1.length; i++) {
        if (nums2Copy.includes(nums1[i])) {
            result.push(nums1[i]);
            let index = nums2Copy.indexOf(nums1[i]);
            nums2Copy.splice(index, 1);
        }
    }

    return result;
};
let nums1 = [1,2,2,1], nums2 = [2,2]
console.log(intersect(nums1, nums2));

