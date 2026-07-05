// console.log(124=='124',10 == '10abc',NaN===NaN,true==20);

// if(20){
//     console.log('20 is true')
// }

// queueMicrotask(()=>console.log('queuedMicrotask'))

const promise1 = Promise.resolve("Success!");
const promise2 = Promise.reject("Error occurred");
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, "Delayed success"));

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
  }).catch(e=>{
    console.log(e)
  });