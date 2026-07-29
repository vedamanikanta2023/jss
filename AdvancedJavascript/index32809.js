// process // argv
const argn = process.argv[2]
const nn = process.argv[3]
console.log(argn,nn)

console.log(process.argv,'argv');

if (true) {
  var foo = 1;
  let bar = 2;
  const baz = 3;
}

console.log(foo); // 1
console.log(bar); // ReferenceError
console.log(baz); // ReferenceError
