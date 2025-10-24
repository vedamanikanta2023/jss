console.log(a); // undefined
var a = 10;
let b = 4092;
sayHi(); // Works due to hoisting
function sayHi() { console.log("Hi"); }

 function displayInfo(name, age, ...otherInfo) {
        console.log(`Name: ${name}, Age: ${age}`);
        console.log(`Other Info: ${otherInfo}`); // otherInfo will be an array
    }
    displayInfo('John', 30, 'Developer', 'NYC');

      const [first, second, ...remaining] = [1, 2, 3, 4, 5];
    console.log(first);    // 1
    console.log(second);   // 2
    console.log(remaining); // [3, 4, 5]