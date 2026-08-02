const fs = require('fs');

console.log('start');

setTimeout(() => {
    console.log('timeout');
}, 0);

fs.readFile(__filename,()=>{
    console.log('file');
})

Promise.resolve().then(()=>{
    console.log('promise');
})
process.nextTick(()=>{
    console.log('next tick');
})
setImmediate(()=>{
    console.log('immediate');
})

console.log('end');