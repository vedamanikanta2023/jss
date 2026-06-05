const shoppingList = ["EGGS", "MILK", "BUTTER", "CHEESE", "BREAD", "SOUR CREAM", "PASTA SAUCE", "BANANAS", "APPLES", "RASPBERRIES", "ICE CREAM", "HOT DOGS", "COFFEE"];

for (const item of shoppingList){
    console.log(item)
}
const shoppingListIterator = shoppingList[Symbol.iterator]()

console.log(shoppingListIterator.next());console.log(shoppingListIterator.next())