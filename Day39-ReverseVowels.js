/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = []
    let indexes = []
    let vowels = []
    let sp = s.split("")
    
    for (let i = 0; i < sp.length; i++) {
        if (sp[i].toLowerCase() == 'a' || sp[i].toLowerCase() == 'e' || sp[i].toLowerCase() ==  'i' || sp[i].toLowerCase() == 'o' || sp[i].toLowerCase() == 'u') {
            indexes.push(i)
            vowels.push(sp[i])
        }
        else{
            arr.push(sp[i])
        }
        
    }
    vowels.reverse()
    for (let i = 0; i < sp.length; i++) {
        arr.splice(indexes[i], 0, vowels[i])
    }
    return arr.join("")
};
let s = "IceCreAm"
console.log(reverseVowels(s));
