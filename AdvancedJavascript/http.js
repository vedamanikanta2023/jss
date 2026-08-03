const http = require("http");
const {get} = require("http");


// http request can be done in multiple ways direct request with http.request/ http.get /
// destructing method from http i.e {get} = http please observe all the ways by changing the conditions

if (false) {
  const request = http.request("http://www.google.com", (res) => {
    res.on("data", (chunk) => {
      console.log(`BODY: ${chunk}`);
    });

    res.on("end", () => {
      console.log("No more data in the response");
    });
  });

  request.end();
}

if (false) {
  http.get("http://www.google.com", (res) => {
    res.on("data", (chunk) => {
      console.log(`BODY : ${chunk}`);
    });

    res.on("end", () => {
      console.log(`no more chunks`);
    });
  });
}


get('http://www.google.com',(res)=>{
    res.on('data',(chunk)=>{
        console.log('BODY : ',chunk);
    })
    res.on('end',()=>{
        console.log(`no more chunks`);
    })
})