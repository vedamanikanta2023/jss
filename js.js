const lettersCount = {};
let letter;
let count = 1;

function maxConsecutiveLetters(str) {
  const pushToCount = (letter2) => {
    if (Object.keys(lettersCount).includes(letter2)) {
      lettersCount[letter2] =
        count > lettersCount[letter2] ? count : lettersCount[letter2];
    } else {
      lettersCount[letter2] = count;
    }
    count = 1;
  };

  for (let i = 0; i < str.length - 1; i++) {
    const letter2 = str[i];
    if (letter2 === str[i + 1]) {
      count = count + 1;
    } else {
      pushToCount(letter2)
      count = 1;
    }
  }
  pushToCount(str[str.length-1]);
}

maxConsecutiveLetters("aaabbcdddggg");

const arrCount = Object.values(lettersCount);
const biggest = Math.max(...arrCount);
const resultantArr = [];

for (let i of Object.keys(lettersCount)) {
  if (lettersCount[i] === biggest) {
    resultantArr.push({ [i]: biggest });
  }
}
console.log({resultantArr});
