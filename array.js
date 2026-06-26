let myArray = [5, "six", 2, 8.2];
// myArray[1] = 'mani'
// let nooo = myArray.push('joasdf')
// let removedItem = myArray.pop(0)

// console.log(myArray,'myArray',removedItem)

for (let item of myArray){
    if(item===2) break;
    console.log(item)
}