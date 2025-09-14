/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    return Math.min(candyType.length / 2, (new Set(candyType)).size)
};
let candyType = [1,2,2,4, 2];
console.log(distributeCandies(candyType));
