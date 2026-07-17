
console.log('Start of the program');

fetch('https://dummyjson.com/products')
  .then((response) => response.json())
  .then((data) => console.log(data)) // Non-blocking
  .catch((error) => console.error('er',error));

console.log('End of program');