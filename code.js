(function() {
    console.log(1);
    setTimeout(function() {
        console.log(2);
    }, 1000);
    setTimeout(function() {
        console.log(3);
    }, 0);
    Promise.resolve("5").then((value) => console.log(value));
    console.log(4);
})();



