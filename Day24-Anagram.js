var isAnagram = function(s, t) {
    let a = s.split("");
    let b = t.split("");
    let count = 0;

    if (a.length !== b.length) {
        return false;
    }

    let bCopy = [...b];

    for (let i = 0; i < a.length; i++) {
        let index = bCopy.indexOf(a[i]);
        if (index !== -1) {
            bCopy.splice(index, 1); 
            count++;
        }
    }

    if (count === a.length) {
        return true;
    } else {
        return false;
    }
};

let s = "rat", t = "car";
console.log(isAnagram(s, t));
