const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hi ${this.name}`, this);
    setTimeout(() => {
      console.log(`Hi ${this.name}`);
    }, 1000);
  },
};

// person.greet()

const sum = (...args) => {
  return args.map((num) => num + 1);
};

console.log(sum(1, 2, 3, 8, 4, 5));

//iife function
(() => {
  console.log("ufoiwej");
})();

function throttle(fn, delay = 300) {
  let last;
  let throttleTimeout;
  return function (...args) {
    let now = new Date().getTime();
    if (last - now > delay) {
      clearTimeout(throttleTimeout);
      throttleTimeout = setTimeout(fn(...args), 0);
      return;
    }
    last = now;
    return fn(...args);
  };
}

("use strict");
const obj = {
  name: "vedamaniaknta",
  method:  ()=> {
    console.log(this, "thisss");
  },
};

obj.method();
