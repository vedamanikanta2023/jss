// callback functions //


setTimeout(function () {
  console.log("it is a callback Function");
}, 10 * 1000);

function x(some) {
    console.log('X')
    some()
}

x(function y() {
    console.log('Y')
});

