process.nextTick(function tick(){
    console.log('nextTick');
    process.nextTick(tick)
})

setTimeout(function(){
    console.log('timeout');
})