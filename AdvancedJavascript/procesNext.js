process.nextTick(function tick(){
    console.log('nextTick');
    // process.nextTick(tick)
})
process.nextTick(function tick(){
    console.log('2nd nextTick');
    // process.nextTick(tick)
})
Promise.resolve().then(()=>{
    console.log('promise');
})
setTimeout(function(){
    console.log('timeout');
})

Promise.resolve().then(()=>{
    console.log('promise resolved');
});

console.log('sampleing');