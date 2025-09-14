/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0
    let max = Math.max(stones.length, jewels.length)
    for (let i = 0; i < max; i++) {
       for (let j = 0; j < max; j++) {
        if (jewels[i] == stones[j]) {
            count++
        } 
       }
    }
    return count

};
let jewels = "badc", stones = "ccc"
console.log(numJewelsInStones(jewels, stones));
