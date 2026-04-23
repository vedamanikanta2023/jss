
console.log('start')
setTimeout(function cb() {
    console.log('setTimeout cb()')
}, 3*1000);

let start = new Date().getTime();
let endTime = start+6000

while(start<endTime){
    start=new Date().getTime();
}

console.log('end')