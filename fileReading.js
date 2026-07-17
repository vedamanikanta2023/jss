
if(false){
const fs = require('fs');
const path = `c:/Users/ADMIN/Downloads/VedamanikantamVangReact_Developer.pdf`;
const data = fs.readFileSync(path, 'utf8');
console.log(data); // Blocks until file is read
console.log('End of the program');
}

console.log('Start of the program');

fetch('https://dummyjson.com/products')
  .then((response) => response.json())
  .then((data) => console.log(data)) // Non-blocking
  .catch((error) => console.error('er',error));

console.log('End of program');
