let array = [4,6,3,2]
array.forEach((v,i,a) => {
    console.log(v, i, a); 
});
// array.map(v=> v*2).forEach(v => console.log(v));

array.filter((val)=> val % 2 == 0).forEach((v)=> console.log(v));
console.log(array.find((val)=> val % 2 == 0));



