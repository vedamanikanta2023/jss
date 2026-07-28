function expensiveOperation(n) {
  console.log('Calculating for', n);
  return n * 2;
}

// Memoize function
function memoize(func) {
  const cache = {};

  return function (n) {
    if (cache[n] !== undefined) {
      console.log('From cache for', n);
      return cache[n];
    }
    const result = func(n);
    cache[n] = result;
    return result;
  };
}

const memoizedExpensiveOperation = memoize(expensiveOperation);

console.log(memoizedExpensiveOperation(5)); // Calculating for 5, 10
console.log(memoizedExpensiveOperation(5)); // From cache for 5, 10
console.log(memoizedExpensiveOperation(4)); // From cache for 5, 10

console.log(memoizedExpensiveOperation(4)); // From cache for 5, 10
