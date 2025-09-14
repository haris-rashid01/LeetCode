/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let index = 0
    if (haystack.includes(needle)) {
        index = haystack.indexOf(needle)
        return index    
    }
    else{
        return -1
    }
};
let haystack = "sadbutsad", needle = "sad"
console.log(strStr(haystack, needle))
