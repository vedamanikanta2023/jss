console.log('start');

setTimeout(() => {
    console.log('timeout 1');
}, 0);
setImmediate(()=>console.log('immdiate'));
Promise.resolve().then(()=>{
    console.log('promise');
})
process.nextTick(()=>{
    console.log('nextTick');
})

console.log('end');