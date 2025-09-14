/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    s = s.replace(/-/g, "").toUpperCase();
    
    let res = [];
    let count = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        res.push(s[i]);
        count++;
        
        if (count === k && i !== 0) {
            res.push("-");
            count = 0;
        }
    }
    
    return res.reverse().join("");
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4)); 
console.log(licenseKeyFormatting("2-5g-3-J", 2));    
