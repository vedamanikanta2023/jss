console.log('Start');
setTimeout(() => {
    console.log('Timeout 1');
}, 0);
Promise.resolve().then(() => {
    console.log('Promise 1');
});
console.log('End');