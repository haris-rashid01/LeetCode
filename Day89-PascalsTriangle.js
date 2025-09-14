/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = []

    if (numRows>=1) result.push([1])
    if (numRows>=2) result.push([1, 1])

    for (let i = 2; i < numRows; i++) {
        let start = 1;
        let end = 1;
        let prev = result[i - 1];

        if (prev.length === 2) {
            result.push([start, start + end, end])
        }
        else{
            let left = 0
            let right = 1
            let add = []
            while (right < prev.length) {
                add.push(prev[left] + prev[right])
                left++
                right++
            }
            result.push([start, ...add, end])
        }

        
    }
    return result
};
let numRows = 5
console.log(generate(numRows));
