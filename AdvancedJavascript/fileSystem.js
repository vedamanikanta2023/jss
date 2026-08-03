const fs  = require('fs');

// fs.writeFileSync('ex1.txt','Hello World');
fs.writeFile('ex12.txt','Hello World async',err=>{console.log(err);});
fs.appendFile('ex1.txt','Additional text adding with appendFile method',err=>console.log('err while appending text'))

const data = fs.readFileSync('ex1.txt','utf-8',(err)=>console.log(`error while reading the file ${err}`));
console.log('fileData - ', data);