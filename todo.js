if (true) {
  var foo = 1;
  let bar = 2;
  const baz = 3;
}

console.log(foo); // 1
console.log(bar); // ReferenceError
console.log(baz); // ReferenceError