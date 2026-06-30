const SlowlyDone = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Done slowly");
}); //resolves after 500ms

const QuicklyDone = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Done quickly");
}); //resolves after 100ms

const Rejection = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "Rejected"); //always rejected
});

Promise.allSettled([SlowlyDone, QuicklyDone, Rejection])
  .then((value) => {
    console.log(value);
    //  QuicklyDone fulfils first
  })
  .catch((err) => {
    console.log(err);
  });



// console.log("A");
// setTimeout(() => console.log("F"),
// 10);
// setTimeout(() => console.log("B"), 0);
// Promise.resolve().then(() =>
// console.log("C"));
// queueMicrotask(() => console.log("D"));
// console.log("E");