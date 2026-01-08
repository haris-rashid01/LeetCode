var obj = {
    name:"Ali"
}

// let obj3 = {...obj}
let oj2 = {...obj}
let obj2 = Object.assign({}, obj)
let obj3 = Object.assign({}, obj)
obj3.name = "Yasir"

console.log(obj.name);
