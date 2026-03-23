/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let distance = []
    let count = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            count.push(i)
        }
        
    }    

    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            distance.push(0)
        }
        else{
            let min = Infinity
            for (let j = 0; j < count.length; j++) {

                if ((Math.abs(i - count[j])) < min) {
                   min = Math.abs(i - count[j])
                }
                
            }
            distance.push(min)
        }
        
    }
    return distance
};
s = "aaab", c = "b"
console.log(shortestToChar(s, c));
