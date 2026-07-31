process.nextTick(function tick(){
    console.log('nextTick');
    // process.nextTick(tick)
})
Promise.resolve().then(()=>{
    console.log('promise');
})
setTimeout(function(){
    console.log('timeout');
})