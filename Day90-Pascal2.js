/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = []
    let z = rowIndex + 1

    if (z >= 1) result.push([1])
    if (z >= 2) result.push([1, 1])

    for (let i = 2; i < z; i++) {
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
    return result[rowIndex]
};
let rowIndex = 1
console.log(getRow(rowIndex));