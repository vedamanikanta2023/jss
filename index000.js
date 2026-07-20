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

