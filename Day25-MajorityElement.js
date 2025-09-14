/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    nums.sort()
    let max = 0
    let value = 0
    let object = {}

    let count = 1
    let element = 0
    for (let i = 0; i < nums.length; i++) {
        count = 1
        element = nums[i]

        for (let j = 0; j < nums.length; j++) {
            if (i == j) {
                continue
            }
            if (element == nums[j]) {
                count++
                object[element] = count
            }

        }

    }

    for (const key in object) {
        if (object[key] > max) {
            max = object[key]
        }
    }
    for (const key in object) {
        if (object[key] == max) {
            value = key
        }
    }
    if (nums.length == 1) {
        return nums[0]
    }
    else {
        return parseInt(value)
    }

}
let nums = [2, 2, 1, 1, 1, 2, 2]