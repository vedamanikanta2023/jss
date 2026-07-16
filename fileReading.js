

const fs = require('fs');
const path = `c:/Users/ADMIN/Downloads/VedamanikantamVangReact_Developer.pdf`;
const data = fs.readFileSync(path, 'utf8');
console.log(data); // Blocks until file is read
console.log('End of the program');