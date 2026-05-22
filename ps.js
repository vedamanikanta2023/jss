function countNegatives(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }

  const isArrayOfNumbers = arr.some(
    (num) =>
      typeof num !== 'number' ||
      (num === Infinity || num === -Infinity || isNaN(num)),
  );

  if (isArrayOfNumbers) {
    return false;
  }

  {
    let count = 0;
    for (let k of arr) {
      if (k < 0) {
        ++count;
      }
    }

    return count;
  }
}

const count = countNegatives([Infinity, -Infinity, -1, 2, 3]);
console.log(count, "count");

module.exports = { countNegatives };
