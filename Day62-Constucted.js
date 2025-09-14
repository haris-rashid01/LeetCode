/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let dup = [...magazine]

    for (let i = 0; i < ransomNote.length; i++) {

        let index = dup.indexOf(ransomNote[i])

        if(index == -1){
            return false
        }
        dup.splice(index, 1)
        
    }
    return true
};
let ransomNote = "a", magazine = "a"
console.log(canConstruct(ransomNote, magazine))