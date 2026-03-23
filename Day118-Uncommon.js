/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let sen1 = s1.split(" ");
    let sen2 = s2.split(" ");
    let result = [];

    for (let i = 0; i < sen1.length; i++) {
        if (!sen2.includes(sen1[i]) && sen1.indexOf(sen1[i]) === sen1.lastIndexOf(sen1[i])) {
            result.push(sen1[i]);
        }
    }

    for (let i = 0; i < sen2.length; i++) {
        if (!sen1.includes(sen2[i]) && sen2.indexOf(sen2[i]) === sen2.lastIndexOf(sen2[i])) {
            result.push(sen2[i]);
        }
    }

    return result;
};

let s1 = "this apple is sweet", s2 = "this apple is sour";
console.log(uncommonFromSentences(s1, s2)); 
