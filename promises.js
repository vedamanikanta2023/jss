const fetData = new Promise((res, rej) => {
  setTimeout(() => {
    let success = true && true;
    if (success) {
      res("Data fetched successfull");
    } else {
      rej("Error: Failed to fetch data");
    }
  }, 500);
});

fetData
  .then((res) => {
    console.log("response", res);
  })
  .catch((e) => {
    console.error("error231 : ", e);
  })
  .finally(() => {
    console.log("finally");
  });


  const promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,900,'Promise 1 result')
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,600,'Promise 2 result')
})
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,200,'Promise 3 result')
})

Promise.all([promise1,promise2,promise3])
.then(result=>{
    console.log('result: ',result)
})
.catch(e=>console.error('error',e))