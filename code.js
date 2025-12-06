let arrOfItems = [2, 5, 3, 2, 6, 5, 7, 1, 2];

function getFirstNonRepetativeItemOfArray(arrOfItems) {
  const objNums = {};

  arrOfItems.forEach((num) => {
    if (objNums[String(num)]) {
      objNums[String(num)] = objNums[String(num)] + 1;
    } else {
      objNums[String(num)] = 1;
    }
  });

  let firstNonRepetitiveNum;

  for (let singleNum of arrOfItems) {
    if (objNums[String(singleNum)] === 1) {
      firstNonRepetitiveNum = singleNum;
      break;
    }
  }

  console.log("firstNonRepetitiveNum",firstNonRepetitiveNum);
  return firstNonRepetitiveNum;
}

getFirstNonRepetativeItemOfArray(arrOfItems)