console.log(y);            // undefined (var is initialized at hoist time)
var y = 10;
let x = 10;
console.log(x);            // ReferenceError (x in TDZ)
const arr = [1, 2, 3];
arr[10] = 99;
console.log(arr.length,arr);
console.log(typeof arr)
console.log( typeof undefined)