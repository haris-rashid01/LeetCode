// const p1 = new Promise((resolve, reject)=>{
//     resolve("Resolved");
//     reject("Rejected");
// })
// p1.then(function(data){
//     console.log(data) 
// }).catch(function (err) {
//     console.log(err);
    
// })

// function getData(){
//     fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json()).then((data)=> console.log(data))

// }
// // getData()


// async function getAsync(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data = await response.json();
//     console.log(data);
// }
// getAsync()

// function dynamic(arg) {
//     return new Promise((resolve, reject)=>{
//     resolve(arg)
//     }
// )
    
// }
// dynamic("jkjkj").then((data)=> console.log(data));

const newPromise = new Promise((res, rej)=>{
    res("resolved")
    rej("rejected")
})

newPromise.then(function(data){

console.log(data);
}).catch((err)=>{
    console.log(err);
    
})