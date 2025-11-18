console.log("This is the first statement");

setTimeout(function() {
    console.log("This is the second statement");
}, 1000);

Promise.resolve(console.log("hi I'm promise"))

console.log("This is the third statement");