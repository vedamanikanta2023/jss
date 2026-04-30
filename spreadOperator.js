//array spreading
let arr1 = [2, 3, 65];
let arr2 = [...arr1];
arr2[1] = "mani";
const finArray = [...arr1, ...arr2];

// console.log(finArray,arr1,'finArray')

//object spreading
let person = { name: "Rahul", age: 27 };
// console.log(personDetails,'personDetails');

function add(a, b, c) {
  console.log(a + b + c);
}

add(...arr1);

let address = { city: "Hyderabad", pincode: 500001 };
let personDetails = { ...address, ...person };
console.log(personDetails);

function someFun(...args) {
  console.log(args, "args");
}
someFun(2, 3, 1, 7, 5, 9);

let timeout;

function debounce(func, delay = 1000) {
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

for (let i = 2; i < 10; i++) {
  let a = i + 3;
  debounce((a, i) => {
    console.log("debounced:8", i);
  }, 300)(a,i+55);
}

function throttle(func,delay=800){
    let last = 0
    let throttleTimeout;
    return function(...args){
        let now = new Date().getTime();
        if(now-last < delay) {
           clearTimeout(throttleTimeout)
           throttleTimeout = setTimeout(()=>func(...args),delay+1)
            return
        };
        last=now;
        console.log(last)
        return func(...args)
    }
}

let throttleCall = throttle((a, i) => {
    console.log("throttle:8", i, new Date().toLocaleTimeString());
  }, 2000)
for (let i = 2; i < 10; i++) {
  let a = i + 3;
  throttleCall(a,i+55,8465);
}

const {name,city,...rest} = personDetails;
console.log(name,city,rest,'rest')

const add1 = (a,b,...rest)=>{
    console.log(a,b,rest,'add1')
}

add(1, 2, 3, 4, 5)
