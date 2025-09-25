const os = require('node:os');
const fs = require("fs");

console.log(os.hostname(),os.freemem());

fs.writeFile("./sample.txt",'Testing FS Module',(err)=>{
    if(err){
        console.log("error occured");
        return
    }
    console.log("file created")
});

fs.readFile("./sample.txt","utf-8",(err,data)=>{
    if(err){
        console.log("error occured");
        return;
    }
    console.log("read data",data)
})