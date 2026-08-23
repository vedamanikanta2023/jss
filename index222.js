
//use case of anonymous functions 

(function(){
    var x = 10;
    console.log(x);
})()

// anonymous function as cb in settimeout
setTimeout(()=>{
console.log('anonymous cb');
},1000)

// more over we can use anonymous functions in higher order functions 

Array([1,2,3,4]).forEach(element => {
    console.log('higher order function with anonymous function');
});

// asynchronus progam
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

//memoization

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    return cache[key] || (cache[key] = fn.apply(this, args));
  };
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(6)); // Output: 8
console.log(memoizedFibonacci(7)); // Output: 13
console.log(memoizedFibonacci(6)); // Output: 8 (retrieved from cache)

