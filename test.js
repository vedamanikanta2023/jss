function getFirstRepetetivie(string1) {
  let letterObe = {};
  const letters = [];
  function findRepeatLetters(str) {
    let arrOfString = str.split("");
    let uniqueletters = arrOfString.forEach((letter) => {
      if (Object.keys(letterObe).includes(letter)) {
        letterObe[letter] = letterObe[letter] + 1;
        return;
      }
      letterObe[letter] = 1;
    });
  }

  findRepeatLetters(string1);
  const uniques = Object.keys(letterObe);
  let firstLetter = null;
  uniques.forEach((l) => {
    if (letterObe[l] === 1 && firstLetter === null) {
      firstLetter = l;
    }
  });
  console.log(firstLetter);
  return firstLetter;
}

getFirstRepetetivie("typescript");
