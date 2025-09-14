/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let n1 = num.toString(2).split("")
    console.log(n1);
    
    for (let i = 0; i < n1.length; i++) {
        if (n1[i] == '1') {
            n1[i] = 0
        }
        else{
            n1[i] = '1'
        }
        
    }
    return parseInt(n1.join(""), 2)
};
let num = 5
console.log(findComplement(num));
