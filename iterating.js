// const shoppingList = ["EGGS", "MILK", "BUTTER", "CHEESE", "BREAD", "SOUR CREAM", "PASTA SAUCE", "BANANAS", "APPLES", "RASPBERRIES", "ICE CREAM", "HOT DOGS", "COFFEE"];

// for (const item of shoppingList){
//     console.log(item)
// }
// const shoppingListIterator = shoppingList[Symbol.iterator]()

// console.log(shoppingListIterator.next());console.log(shoppingListIterator.next())

const myObject = {
  property1: "jdfk",
  property2: "bgtd",
  property3: "gftdb",
  [Symbol.iterator]: function () {
    const properties = Object.keys(this);
    let index = 0;
    return {
      next: () => {
        if (index < properties.length) {
          return {
            value: this[properties[index++]],
            done: false,
          };
        } else {
          return {
            value: undefined,
            done: true,
          };
        }
      },
    };
  },
};

const objIterator = myObject[Symbol.iterator]();

// console.log(objIterator.next())
// console.log(objIterator.next())
// console.log(objIterator.next())
// console.log(objIterator.next())
for (const item of myObject) {
  console.log(item);
}
