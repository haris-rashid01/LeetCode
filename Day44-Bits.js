/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = []
    for (let i = 0; i < n + 1; i++) {        
        result.push(i.toString(2).split("0").join("").length )
    }
    return result    
};
let n = 2
console.log(countBits(n));
