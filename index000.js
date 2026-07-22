const { EventEmitter } = require("nodemailer/lib/xoauth2");

const promise1 = fetch('https://dummyjson.com/carts');
const promise2 = fetch('https://dummyjson.com/carts');
const promise3 = fetch('https://dummyjson.com/carts');

Promise.all([promise1, promise2, promise3])
  .then((responses) => {
    // Executes only when all promises are resolved.
    console.log('All responses:', responses);
  })
  .catch((error) => {
    // Catches any error from any promise.
    console.error('Error:', error);
  });



  const eventEmitter = new EventEmitter();

// Subscribe to an event
eventEmitter.on('customEvent', (data) => {
  console.log('Event emitted with data:', data);
});

// Emit the event
eventEmitter.emit('customEvent', { message: 'Hello, world!' });



// Custom recursive array flattener
function flattenArray(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    [],
  );
}

const nestedArray = [1, [2, [3, [4, [5]]]]];
const flatArray = flattenArray(nestedArray);

console.log(flatArray); // Output: [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = Object.assign({}, obj1, obj2);

console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }

