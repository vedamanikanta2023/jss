var name;
console.log(typeof name);
var age = null;
console.log(null !== age);

// promise chaining
let a = 2;
b = 6;

new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(a + b);
  }, 2000);
})
  .then((response) => {
    return response * 2;
  })
  .then((response) => {
    console.log(response / 3);
    return response / 3;
  });
