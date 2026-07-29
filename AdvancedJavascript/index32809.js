// // process // argv
// const argn = process.argv[2]
// const nn = process.argv[3]
// console.log(argn,nn)

// console.log(process.argv,'argv');


setTimeout(() => {
    console.log('1');
}, 0);
setTimeout(()=>{
    console.log('2');
},0)
setImmediate(()=>{
    console.log('3');
})
setImmediate(()=>{
    console.log('4');
})
// console.log('start');