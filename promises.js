console.log(1,"---------------------------")
setTimeout(()=>console.log(2),0)
Promise.resolve().then(()=>console.log(3));
console.log(4)

// console.log(1,"------Promises-----------")
// const promise1 = new Promise((res,rej)=>{
//     console.log("prom1 log");
//     res("success");
//     // rej("failure")
// })
// setTimeout(()=>console.log("timeout"),0);

// promise1.then((data)=>{
//     console.log("32",data);
// })
// .catch(e=>{
//     console.log(e)
// })
// Promise.resolve().then(()=>console.log(3));
// console.log("------Promise last----------")

// const prom2 = new Promise((res,rej)=>{
//     console.log("prom2")
//     res(promise1)
// })
// prom2.then(()=>console.log("prom2 resolved"))

//------------------------//
// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1)
//   resolve('success')
// }));

// fn().then(res => {
//   console.log(res)
// });

// console.log(2)


