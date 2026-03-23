/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let s = sentence.split(" "); 

    for (let i = 0; i < s.length; i++) {
        let word = s[i].split("");
        let first = word[0];

        if ("aeiouAEIOU".includes(first)) {
            word.push("m", "a");
        } else {
            word.shift();
            word.push(first, "m", "a");
        }

        for (let z = 0; z < i + 1; z++) {
            word.push("a");
        }
        s[i] = word.join("");
    }

    return s.join(" ");
};

let sentence = "I speak Goat Latin";
console.log(toGoatLatin(sentence)); 
