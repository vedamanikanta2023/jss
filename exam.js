// console.log("A");
// setTimeout(() => console.log("F"), 10);
// setTimeout(() => console.log("B"), 0);
// Promise.resolve().then(() => console.log("C"));
// // queueMicrotask(() => console.log("D"));
// console.log("E");

// //a ,e,c,b,f

const str1 = "welcome to this world";

// emoclew ot siht dlrow

const arrStr = str1.split(' ');
const arrOfReversed = [];
for(let str of arrStr){
    let reversed = '';
    const arrR = str.split("");
    for(let k of arrR){
        reversed = k +reversed;
    }
    arrOfReversed.push(reversed)
}

const result = arrOfReversed.join(" ")
console.log(result,'result')