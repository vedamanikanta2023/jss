var name;
console.log(typeof name);
var age = null;
console.log(null !== age);

// promise chaining
function promising(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(a + b);
    });
  })
    .then((response) => {
      return response * 2;
    })
    .then((response) => {
      return response/3
    });
}
promising(4, 5)
.then(res=>{
    console.log(res)
}).catch(e=>console.log(e))
