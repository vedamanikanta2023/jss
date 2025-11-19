(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);

const fun = function (x) {
  const innerfunction = function (y) {
    console.log(x);
  };
  return innerfunction(2);
};
console.log(fun(22));
