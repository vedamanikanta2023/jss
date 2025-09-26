function createCounter() {
  let count = 0; // 'count' is a local variable in createCounter's scope

  return function() { // This is the inner function, forming a closure
    count += 1;
    return count;
  };
}

const counter1 = createCounter(); // counter1 is a closure
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2

const counter2 = createCounter(); // counter2 is a separate closure
console.log(counter2()); // Output: 1 (starts a new count)
console.log(counter2()); // Output: 1 (starts a new count)