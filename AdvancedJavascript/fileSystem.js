const fs  = require('fs');

// fs.writeFileSync('ex1.txt','Hello World');
fs.writeFile('ex12.txt','Hello World async',err=>{console.log(err);});
fs.appendFile('ex1.txt','Additional text adding with appendFile method',err=>console.log('err while appending text'))
// reading the file data synchronosly //
const data = fs.readFileSync('ex1.txt','utf-8',(err)=>console.log(`error while reading the file ${err}`));
console.log('fileData - ', data);

//reading file data asynchron0usly //

fs.readFile('ex1.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err,' error while reading the file data asynchronously');
    }else{
        console.log(`file's data ${data}`);
    }
})


// reading data of file in async with fs/promise
const fsPromise = require('fs/promises');

(async ()=>{
    try {
        const data =await fsPromise.readFile('ex1.txt','utf-8');
        console.log(`fs/Promise file's data : ${data}`);
    } catch (error) {
        console.log('err while reading the file data in fs/promise : ',error);
    }
})()

