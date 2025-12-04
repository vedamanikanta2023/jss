const inputs = [
  "The quick brown fox jumped over the lazy dog",
  "The quick brown fox jumps over the lazy dog",
];

function getLongestWordInString(str) {
  const longestWords = [];

  const arrOfStrings = str.split(" ");
  const lengsOfStrs = arrOfStrings.map((str1) => {
    return str1.length;
  });

  let longestWordLength = Math.max(...lengsOfStrs);

  arrOfStrings.forEach((singleStr) => {
    if (singleStr.length === longestWordLength) {
      longestWords.push(singleStr);
    }
  });

  if (longestWords.length > 1) {
    console.log(longestWords);
    return;
  }

  console.log(longestWords[0]);
}

inputs.forEach((str) => getLongestWordInString(str));
