/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    strs.sort()
    let a = strs[0]
    let first = strs[0]
    let last = strs[strs.length - 1]
    let min = Math.min(first.length, last.length)
    let prefix = ""



    // console.log(a)
    for (let j = 0; j < min; j++) {
        if (first[j] == last[j]) {
            prefix += first[j]
        }
        else {
            break
        }
    }
    return prefix
    
}
let strs = ["cir","car"]
console.log(longestCommonPrefix(strs))