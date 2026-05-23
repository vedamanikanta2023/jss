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

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 900, "Promise 1 result");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 600, "Promise 2 result");
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "Promise 3 result");
});

Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log("result: ", result);
  })
  .catch((e) => console.error("error", e));

// Promise chaining
const promise = new Promise((success, failure) => {
  if (1) {
    setTimeout(success, 1000,20);
  } else {
    failure("failed Promise");
  }
});

console.log("promise", promise);

promise
  .then((reso, one) => {
    console.log(reso);

    return new Promise((res, rej) => {
      res(reso * 3);
    });
  })
  .then((result) => {console.log("res", result)
    return new Promise((res,rej)=>{
      res(result/2)
    })
  })
  .then(result=>console.log('result after the chaining :', result))
  .catch((e) => console.log("catched :", e));
