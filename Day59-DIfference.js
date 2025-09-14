/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
     let dup = [...t]

    for (let i = 0; i < s.length; i++) {
        let index = dup.indexOf(s[i])
        if(index != -1){
            dup.splice(index, 1)
        }
    }
    return dup[0]
};